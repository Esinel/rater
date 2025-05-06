"use client";

import { ReviewItem } from "@/components/ReviewItem/ReviewItem";
import { submitReview } from "@/app/actions";
import { useActionState, useRef } from "react";
import { Tables } from "@/database.types";

interface ReviewViewProps {
  qrCode: string;
  workerId: string;
  ratingItems: Tables<"rating_item">[];
}

export function ReviewView({ qrCode, workerId, ratingItems }: ReviewViewProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [, formAction, isSubmitting] = useActionState(submitReview, null);

  if (isSubmitting) {
    return <div>Submitting...</div>;
  }

  return (
    <form
      action={formAction}
      ref={formRef}
      className="flex flex-col gap-8 mt-8"
    >
      <input type="hidden" name="qrCode" value={qrCode} />
      <input type="hidden" name="workerId" value={workerId} />

      {ratingItems.map((item) => {
        const fieldName = item.name.toLowerCase().replace(/\s+/g, "_");
        return (
          <ReviewItem
            key={item.name}
            title={item.name}
            description={item.description || ""}
            name={fieldName}
            onScoreSelected={() => {}}
          />
        );
      })}

      <div className="flex flex-col gap-4">
        <textarea
          name="comment"
          className="w-full p-2 border rounded-md min-h-[120px]"
          placeholder="Dodajte komentar o radniku"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Posalji
      </button>
    </form>
  );
}
