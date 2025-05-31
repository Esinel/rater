"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../chart";
import { chartConfig } from "./config";

interface AreaChartProps {
  data?: {
    month: string;
    reviews: number;
  }[];
}

export function AreaChartExample({ data }: AreaChartProps) {
  console.log("AreaChart props:", { data }); // More detailed debug log

  if (!data || data.length === 0) {
    console.log("No data available for chart");
    return (
      <div className="p-4 text-center text-gray-500">No data available</div>
    );
  }

  // Ensure data is in the correct format
  const chartData = data.map((item) => ({
    month: item.month,
    reviews: Number(item.reviews) || 0,
  }));

  console.log("Processed chart data:", chartData);

  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <defs>
          <linearGradient id="fillReviews" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="rgb(65, 105, 225)" stopOpacity={0.8} />
            <stop
              offset="95%"
              stopColor="rgb(65, 105, 225)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="reviews"
          type="natural"
          fill="url(#fillReviews)"
          fillOpacity={0.4}
          stroke="rgb(65, 105, 225)"
        />
      </AreaChart>
    </ChartContainer>
  );
}
