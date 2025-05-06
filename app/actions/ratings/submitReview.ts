"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function submitReview(prevState: any, formData: FormData) {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  // Extract data from the form
  const qrCode = formData.get("qrCode") as string;
  const workerId = formData.get("workerId") as string;
  const comment = formData.get("comment") as string;

  // Collect all rating fields dynamically
  const ratings: Record<string, number> = {};

  // Iterate through all form fields to find rating values
  for (const [key, value] of formData.entries()) {
    // Skip non-rating fields
    if (key === "qrCode" || key === "workerId" || key === "comment") continue;

    // Convert the value to a number and add to ratings object
    const numValue = Number(value);
    if (!isNaN(numValue)) {
      ratings[key] = numValue;
    }
  }

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

  if (ratingItemsError) {
    return {
      message: "Failed to fetch rating items. " + ratingItemsError.message,
    };
  }

  const { data: qrCodeData } = await supabase
    .from("qr_code")
    .select("id")
    .eq("qr_code", qrCode)
    .single();

  const qrCodeId = qrCodeData?.id ?? 0;

  // Create a mapping of rating names to their IDs
  const ratingItemMap = ratingItems.reduce((acc, item) => {
    acc[item.name.toLowerCase()] = item.id;
    return acc;
  }, {} as Record<string, number>);

  // Insert the main rating record
  const { data: ratingData, error: ratingError } = await supabase
    .from("rating")
    .insert({
      qr_code_id: qrCodeId,
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
