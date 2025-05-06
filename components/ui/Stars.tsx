import { Star } from "lucide-react";

export function Stars({ score = 0 }: { score: number }) {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((current) => (
        <button key={current} type="button" className="focus:outline-none">
          <Star
            className={`w-4 h-4 ${
              current <= score
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
