import { AreaChartExample } from "@/components/ui/charts/AreaChart";
import { BarChartExample } from "@/components/ui/charts/BarChart";
import { PieChartExample } from "@/components/ui/charts/PieChart";
import { RadarChartExample } from "@/components/ui/charts/RadarChart";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Acme Organization</h1>
        <p className="text-muted-foreground">
          Analytics overview and key metrics
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Metrics Cards */}
        <div className="bg-card rounded-lg shadow p-4 border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Total Users
          </h3>
          <p className="text-3xl font-bold">12,543</p>
          <p className="text-sm text-green-500 mt-1">↑ 12% from last month</p>
        </div>

        <div className="bg-card rounded-lg shadow p-4 border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Active Sessions
          </h3>
          <p className="text-3xl font-bold">1,243</p>
          <p className="text-sm text-green-500 mt-1">↑ 8% from last month</p>
        </div>

        <div className="bg-card rounded-lg shadow p-4 border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Conversion Rate
          </h3>
          <p className="text-3xl font-bold">3.2%</p>
          <p className="text-sm text-red-500 mt-1">↓ 1% from last month</p>
        </div>

        <div className="bg-card rounded-lg shadow p-4 border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Avg. Session
          </h3>
          <p className="text-3xl font-bold">4m 23s</p>
          <p className="text-sm text-green-500 mt-1">↑ 15% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pie Chart (Largest) */}
        <div className="bg-card rounded-lg shadow p-6 border md:col-span-2 lg:col-span-1 lg:row-span-2 h-[400px] md:h-auto">
          <h3 className="text-lg font-medium mb-4">Browser Distribution</h3>
          <div className="h-full w-full">
            <PieChartExample />
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-card rounded-lg shadow p-6 border h-[300px]">
          <h3 className="text-lg font-medium mb-4">Monthly Traffic</h3>
          <div className="h-full w-full">
            <BarChartExample />
          </div>
        </div>

        {/* Area Chart */}
        <div className="bg-card rounded-lg shadow p-6 border h-[300px]">
          <h3 className="text-lg font-medium mb-4">Traffic Trends</h3>
          <div className="h-full w-full">
            <AreaChartExample />
          </div>
        </div>

        {/* Radar Chart */}
        <div className="bg-card rounded-lg shadow p-6 border md:col-span-2 lg:col-span-1 h-[300px]">
          <h3 className="text-lg font-medium mb-4">Monthly Performance</h3>
          <div className="h-full w-full">
            <RadarChartExample />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-card rounded-lg shadow p-6 border">
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
        </div>

        {/* Top Performing Pages */}
        <div className="bg-card rounded-lg shadow p-6 border">
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
        </div>
      </div>
    </div>
  );
}
