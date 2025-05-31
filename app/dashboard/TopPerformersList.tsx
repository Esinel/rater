import { Stars } from "@/components/ui/Stars";

type TopPerformer = {
  id: number;
  firstName: string;
  lastName: string;
  avgRating: number;
  numberOfReviews: number;
};

export function TopPerformersList({
  performers,
}: {
  performers: TopPerformer[];
}) {
  return (
    <div className="space-y-4">
      {performers.map((performer) => (
        <div
          key={performer.id}
          className="flex items-center justify-between p-3 bg-background rounded-lg border"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary text-sm font-medium">
                {performer.firstName[0]}
                {performer.lastName[0]}
              </span>
            </div>
            <div>
              <p className="font-medium">
                {performer.firstName} {performer.lastName}
              </p>
              <p className="text-sm text-muted-foreground">
                {performer.numberOfReviews} reviews
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Stars score={performer.avgRating} />
            <span className="text-sm font-medium">
              {performer.avgRating.toFixed(1)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
