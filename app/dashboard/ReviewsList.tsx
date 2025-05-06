import { Stars } from "@/components/ui/Stars";
import { Tables } from "@/database.types";

export async function ReviewsList({
  reviews,
}: {
  reviews: Tables<"rating">[] | null;
}) {
  return (
    <div>
      <ul>
        {reviews?.map((rating) => (
          <li key={rating.id} className="flex justify-between">
            <span
              className={`${
                !rating.comment ? "text-gray-300" : undefined
              } truncate`}
            >
              {rating.comment || "No comment"}
            </span>
            <span>
              <Stars score={rating.score || 0} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
