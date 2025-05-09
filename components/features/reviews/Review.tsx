"use client";

import { ReviewItem } from "@/components/features/reviews/ReviewItem";
import { submitReview } from "@/app/actions/ratings/submitReview";
import { useActionState, useRef, useState } from "react";
import { Tables } from "@/database.types";
import { toast } from "sonner";

type ReviewProps = {
  qrCode: string;
  workerId: string;
  ratingItems: Tables<"rating_item">[];
};

export function Review({ qrCode, workerId, ratingItems }: ReviewProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [, formAction, isSubmitting] = useActionState(submitReview, null);
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set());

  const handleSubmit = async (formData: FormData) => {
    const invalidFieldsSet = new Set<string>();

    // Check if any rating is missing
    ratingItems.forEach((item) => {
      const fieldName = item.name.toLowerCase().replace(/\s+/g, "_");
      const rating = formData.get(fieldName);
      if (!rating || Number(rating) === 0) {
        invalidFieldsSet.add(fieldName);
      }
    });

    if (invalidFieldsSet.size > 0) {
      setInvalidFields(invalidFieldsSet);
      toast.error("Molimo vas da ocenite sve kategorije pre slanja");
      return;
    }

    setInvalidFields(new Set());
    formAction(formData);
  };

  if (isSubmitting) {
    return <div>Submitting...</div>;
  }

  return (
    <form
      action={handleSubmit}
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
            onScoreSelected={() => {
              if (invalidFields.has(fieldName)) {
                setInvalidFields((prev) => {
                  const next = new Set(prev);
                  next.delete(fieldName);
                  return next;
                });
              }
            }}
            isInvalid={invalidFields.has(fieldName)}
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
