import { AreaChartExample } from "@/components/ui/charts/AreaChart";
// import { BarChartExample } from "@/components/ui/charts/BarChart";
import { PieChartExample } from "@/components/ui/charts/PieChart";
import { RadarChartExample } from "@/components/ui/charts/RadarChart";
import { ReviewsList } from "./ReviewsList";
import { TopPerformersList } from "./TopPerformersList";
import { getDashboardMetrics } from "./dashboardMetrics";

export default async function Dashboard() {
  const {
    organizationName,
    numberOfReviews,
    numberOfWorkers,
    avgRating,
    percentageDiff,
    numberOfReviewsToday,
    todayPercentageDiff,
    ratingDataToday,
    topPerformers,
  } = await getDashboardMetrics();

  console.log(avgRating);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          {organizationName}
        </h1>
        <p className="text-muted-foreground">
          Pregled analitike i ključnih metrika
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Metrics Cards */}
        <div className="bg-card rounded-lg shadow p-4 border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Total Reviews
          </h3>
          <p className="text-3xl font-bold">{numberOfReviews}</p>
          <p className="text-sm text-green-500 mt-1">↑ 12% from last month</p>
        </div>

        <div className="bg-card rounded-lg shadow p-4 border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Total Workers
          </h3>
          <p className="text-3xl font-bold">{numberOfWorkers}</p>
          <p className="text-sm text-green-500 mt-1">Workload covered</p>
        </div>

        <div className="bg-card rounded-lg shadow p-4 border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Total Avg. Rating
          </h3>
          <p className="text-3xl font-bold">{avgRating} / 5</p>
          <p
            className={`text-sm ${
              parseFloat(percentageDiff) >= 0
                ? "text-green-500"
                : "text-red-500"
            } mt-1`}
          >
            {parseFloat(percentageDiff) >= 0 ? "↑" : "↓"}{" "}
            {Math.abs(parseFloat(percentageDiff))}% from last month
          </p>
        </div>

        <div className="bg-card rounded-lg shadow p-4 border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Reviews today
          </h3>
          <p className="text-3xl font-bold">{numberOfReviewsToday}</p>
          <p
            className={`text-sm ${
              parseFloat(todayPercentageDiff) >= 0
                ? "text-green-500"
                : "text-red-500"
            } mt-1`}
          >
            {parseFloat(todayPercentageDiff) >= 0 ? "↑" : "↓"}{" "}
            {Math.abs(parseFloat(todayPercentageDiff))}% from yesterday
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Column - Today (Tall) */}
        <div className="bg-card rounded-lg shadow p-6 border md:col-span-1 lg:row-span-2 h-[400px] md:h-auto">
          <h3 className="text-lg font-medium mb-4">Today</h3>
          <div>
            <PieChartExample visitors={numberOfReviewsToday ?? 0} />
          </div>
          <div className="overflow-auto max-h-[300px]">
            <ReviewsList reviews={ratingDataToday} />
          </div>
        </div>

        {/* Second Column - Traffic Trends and Monthly Performance */}
        <div className="space-y-6 md:col-span-1">
          {/* Traffic Trends */}
          <div className="bg-card rounded-lg shadow p-6 border h-[300px]">
            <h3 className="text-lg font-medium mb-4">Traffic Trends</h3>
            <div className="h-full w-full">
              <AreaChartExample />
            </div>
          </div>

          {/* Monthly Performance */}
          <div className="bg-card rounded-lg shadow p-6 border h-[300px]">
            <h3 className="text-lg font-medium mb-4">Monthly Performance</h3>
            <div className="h-full w-full">
              <RadarChartExample />
            </div>
          </div>
        </div>

        {/* Third Column - Top Performers (Tall) */}
        <div className="bg-card rounded-lg shadow p-6 border md:col-span-1 lg:row-span-2">
          <h3 className="text-lg font-medium mb-4">Top Performers</h3>
          <div className="overflow-auto max-h-[400px]">
            <TopPerformersList performers={topPerformers} />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
      {/* <div className="bg-card rounded-lg shadow p-6 border">
          <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-start pb-4 border-b last:border-0 last:pb-0"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary text-sm">U{i}</span>
                </div>
                <div>
                  <p className="font-medium">User updated their profile</p>
                  <p className="text-sm text-muted-foreground">
                    {i * 10} minutes ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

      {/* Top Performing Pages */}
      {/* <div className="bg-card rounded-lg shadow p-6 border">
          <h3 className="text-lg font-medium mb-4">Top Performing Pages</h3>
          <div className="space-y-4">
            {[
              { name: "Homepage", views: "12,543", conversion: "3.2%" },
              { name: "Products", views: "8,371", conversion: "2.8%" },
              { name: "Pricing", views: "6,234", conversion: "4.1%" },
            ].map((page, i) => (
              <div
                key={i}
                className="flex justify-between items-center pb-4 border-b last:border-0 last:pb-0"
              >
                <div>
                  <p className="font-medium">{page.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {page.views} views
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{page.conversion}</p>
                  <p className="text-sm text-muted-foreground">conversion</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}
