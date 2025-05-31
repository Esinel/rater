import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { DashboardMetrics } from "./types";

export async function getDashboardMetrics(): Promise<DashboardMetrics> {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  // Get current date and yesterday's date
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);

  // Format dates for database query
  const todayStr = now.toISOString().split("T")[0];
  const yesterdayStr = yesterday.toISOString().split("T")[0];

  const firstDayOfLastMonth = new Date(
    now.getFullYear(),
    now.getMonth() - 1,
    1
  );
  const lastDayOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

  const { data: organizationData } = await supabase
    .from("organization")
    .select("*")
    .eq("id", 1);

  const { data: ratingData } = await supabase
    .from("rating")
    .select("*")
    .eq("organization_id", 1);

  const { data: ratingDataToday } = await supabase
    .from("rating")
    .select("*")
    .eq("organization_id", 1)
    .gte("created_at", todayStr)
    .order("created_at", { ascending: false });

  const { data: ratingDataYesterday } = await supabase
    .from("rating")
    .select("*")
    .eq("organization_id", 1)
    .gte("created_at", yesterdayStr)
    .lt("created_at", todayStr);

  const { data: lastMonthRatingData } = await supabase
    .from("rating")
    .select("*")
    .eq("organization_id", 1)
    .gte("created_at", firstDayOfLastMonth.toISOString())
    .lte("created_at", lastDayOfLastMonth.toISOString());

  const { data: workerData } = await supabase
    .from("worker")
    .select("*")
    .eq("organization_id", 1);

  // Calculate worker performance metrics
  const workerPerformance = await Promise.all(
    (workerData ?? []).map(async (worker) => {
      const { data: workerRatings } = await supabase
        .from("rating")
        .select("score")
        .eq("worker_id", worker.id);

      const avgRating = workerRatings?.length
        ? (
            workerRatings.reduce((acc, curr) => acc + (curr.score ?? 0), 0) /
            workerRatings.length
          ).toFixed(1)
        : "0";

      return {
        id: worker.id,
        firstName: worker.first_name,
        lastName: worker.last_name,
        avgRating: parseFloat(avgRating),
        numberOfReviews: workerRatings?.length ?? 0,
      };
    })
  );

  // Sort workers by average rating
  const sortedWorkers = workerPerformance.sort(
    (a, b) => b.avgRating - a.avgRating
  );

  const organizationName = organizationData?.[0]?.name ?? "";

  const numberOfReviews = ratingData?.length ?? 0;
  const numberOfWorkers = workerData?.length ?? 0;

  const avgRating = (
    (ratingData?.reduce((acc, curr) => acc + (curr.score ?? 0), 0) ?? 0) /
    (numberOfReviews || 1)
  ).toFixed(1);

  const lastMonthAvgRating = (
    (lastMonthRatingData?.reduce((acc, curr) => acc + (curr.score ?? 0), 0) ??
      0) / (lastMonthRatingData?.length || 1)
  ).toFixed(1);

  // Calculate percentage difference
  let percentageDiff = "0";
  if (lastMonthRatingData?.length && ratingData?.length) {
    const currentAvg = parseFloat(avgRating);
    const lastMonthAvg = parseFloat(lastMonthAvgRating);

    if (lastMonthAvg > 0) {
      percentageDiff = (
        ((currentAvg - lastMonthAvg) / lastMonthAvg) *
        100
      ).toFixed(1);
    }
  }

  const numberOfReviewsToday = ratingDataToday?.length ?? 0;
  const numberOfReviewsYesterday = ratingDataYesterday?.length ?? 0;

  // Calculate monthly review data for the past 6 months
  const monthlyReviewData = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const monthReviews =
      ratingData?.filter((rating) => {
        if (!rating.created_at) return false;
        const ratingDate = new Date(rating.created_at);
        return ratingDate >= firstDayOfMonth && ratingDate <= lastDayOfMonth;
      }) ?? [];

    return {
      month: date.toLocaleString("default", { month: "long" }),
      reviews: monthReviews.length,
    };
  }).reverse(); // Reverse to get chronological order

  // Remove duplicate months and ensure chronological order
  const uniqueMonthlyData = monthlyReviewData.reduce((acc, curr) => {
    const existingMonth = acc.find((item) => item.month === curr.month);
    if (!existingMonth) {
      acc.push(curr);
    }
    return acc;
  }, [] as typeof monthlyReviewData);

  console.log("Final monthlyReviewData:", uniqueMonthlyData);

  // Calculate percentage difference for today vs yesterday
  let todayPercentageDiff = "0";
  if (numberOfReviewsYesterday === 0 && numberOfReviewsToday > 0) {
    todayPercentageDiff = "100"; // Show 100% increase when going from 0 to any number
  } else if (numberOfReviewsYesterday > 0) {
    todayPercentageDiff = (
      ((numberOfReviewsToday - numberOfReviewsYesterday) /
        numberOfReviewsYesterday) *
      100
    ).toFixed(1);
  }

  return {
    organizationName,
    numberOfReviews,
    numberOfWorkers,
    avgRating,
    lastMonthAvgRating,
    percentageDiff,
    numberOfReviewsToday,
    todayPercentageDiff,
    ratingDataToday: ratingDataToday ?? [],
    ratingData: ratingData ?? [],
    workerData: workerData ?? [],
    topPerformers: sortedWorkers.slice(0, 5),
    monthlyReviewData: uniqueMonthlyData,
  };
}
