"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function submitReview(prevState: any, formData: FormData) {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  // Extract data from the form
  const qrCode = formData.get("qrCode") as string;
  const workerId = formData.get("workerId") as string;
  const ratings = {
    kindness: Number(formData.get("kindness")),
    behavior: Number(formData.get("behavior")),
    quality: Number(formData.get("quality")),
    timeliness: Number(formData.get("timeliness")),
    cleanliness: Number(formData.get("cleanliness")),
    overall: Number(formData.get("overall")),
  };
  const comment = formData.get("comment") as string;

  // Calculate average score
  const averageScore =
    Object.values(ratings).reduce((a, b) => a + b, 0) /
    Object.keys(ratings).length;

  // First, get the rating_item IDs for each category
  const { data: ratingItems, error: ratingItemsError } = await supabase.from(
    "rating_item"
  ).select(`
      id,
      name,
      organization (
        id,
        name
      )
    `);

  console.log(ratingItems);

  if (ratingItemsError) {
    return {
      message: "Failed to fetch rating items. " + ratingItemsError.message,
    };
  }

  // Create a mapping of rating names to their IDs
  const ratingItemMap = ratingItems.reduce((acc, item) => {
    acc[item.name.toLowerCase()] = item.id;
    return acc;
  }, {} as Record<string, number>);

  // Insert the main rating record
  const { data: ratingData, error: ratingError } = await supabase
    .from("rating")
    .insert({
      qr_code_id: Number(qrCode),
      worker_id: Number(workerId),
      score: averageScore,
      comment,
      created_at: new Date().toISOString(),
      organization_id: 1, // donkey: get organization fro
    })
    .select()
    .single();

  if (ratingError) {
    return {
      message: "Failed to submit review. " + ratingError.message,
    };
  }

  // Create rated_item records for each category
  const ratedItems = Object.entries(ratings).map(([category, score]) => ({
    rating_id: ratingData.id,
    rating_item_id: ratingItemMap[category.toLowerCase()],
    score,
  }));

  const { error: ratedItemsError } = await supabase
    .from("rated_item")
    .insert(ratedItems);

  if (ratedItemsError) {
    return {
      message:
        "Failed to submit individual ratings. " + ratedItemsError.message,
    };
  }

  redirect("/thank-you");
}
