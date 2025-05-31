type Rating = {
  id: number;
  organization_id: number | null;
  score: number | null;
  created_at: string | null;
  comment: string | null;
  qr_code_id: number | null;
  worker_id: number | null;
};

type Worker = {
  id: number;
  organization_id: number | null;
  first_name: string;
  last_name: string;
  email: string | null;
  phone_number: string | null;
  date_of_birth: string | null;
  age: number | null;
  avg_rating: number | null;
  picture_url: string | null;
};

type TopPerformer = {
  id: number;
  firstName: string;
  lastName: string;
  avgRating: number;
  numberOfReviews: number;
};

export interface DashboardMetrics {
  organizationName: string;
  numberOfReviews: number;
  numberOfWorkers: number;
  avgRating: string;
  lastMonthAvgRating: string;
  percentageDiff: string;
  numberOfReviewsToday: number;
  todayPercentageDiff: string;
  ratingDataToday: any[];
  ratingData: any[];
  workerData: any[];
  topPerformers: any[];
  monthlyReviewData: {
    month: string;
    reviews: number;
  }[];
}
