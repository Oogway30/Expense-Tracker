"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { useSelector } from "react-redux";
import { getTotalSpentByCategory } from "../Redux/Transaction/transactionSlice";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart";

export const description = "A bar chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3CB371",
  },
} satisfies ChartConfig;

export function ChartBarDefault() {
  const chartData = useSelector(getTotalSpentByCategory);
  const [TodayDate] = useState(() =>
  new Date().toLocaleDateString()
);


  return (
    <Card className="backdrop-blur-xs bg-white/0.5">
      <CardHeader>
        <CardTitle>Expense Chart</CardTitle>
        <CardDescription>{TodayDate}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                typeof value === "string" ? value.slice(0, 20) : String(value)
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
