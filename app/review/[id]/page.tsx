import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { Review } from "@/components/features/reviews/Review";

interface ReviewPageProps {
  params: {
    id: string;
  };
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const qrCode = (await params).id;
  if (!qrCode) {
    notFound();
  }

  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  const { data: qrCodeData } = await supabase
    .from("qr_code")
    .select()
    .eq("qr_code", qrCode);

  const workerId = qrCodeData?.[0]?.worker_id;

  const { data: workerData } = await supabase
    .from("worker")
    .select()
    .eq("id", Number(workerId || 0));

  if (!workerData?.[0]) {
    notFound();
  }

  const { data: ratingItemsData } = await supabase
    .from("rating_item")
    .select()
    .eq("organization_id", 1);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl mb-4">
        Recenzija za: <br />
        <span className="font-bold">
          {workerData[0].first_name} {workerData[0].last_name}
        </span>
      </h1>

      <Review
        qrCode={qrCode}
        workerId={workerId?.toString() || ""}
        ratingItems={ratingItemsData ?? []}
      />
    </div>
  );
}
