"use client";

import { Star } from "lucide-react";
import { useRef, useState } from "react";

type ReviewItemProps = {
  title: string;
  description: string;
  name: string;
  onScoreSelected?: (score: number) => void;
};

export function ReviewItem({
  title,
  description,
  name,
  onScoreSelected,
}: ReviewItemProps) {
  const [selectedScore, setSelectedScore] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleScoreClick = (score: number) => {
    setSelectedScore(score);
    onScoreSelected?.(score);
  };

  return (
    <div className="p-6 rounded-lg shadow-sm min-h-[200px] flex flex-col">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((score) => (
          <button
            key={score}
            type="button"
            onClick={() => handleScoreClick(score)}
            className="focus:outline-none"
          >
            <Star
              className={`w-8 h-8 ${
                score <= selectedScore
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
      <input type="hidden" name={name} value={selectedScore} ref={inputRef} />
    </div>
  );
}
