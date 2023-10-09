"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartType } from "../DashboardComponents/types";
import { useMemo } from "react";
import { useTheme } from "next-themes";

export default function ChartBar({ sales }: { sales: ChartType }) {
  const { theme } = useTheme();
  const chartData = useMemo(
    () =>
      sales?.labels?.map((l, index) => ({
        sale: new Date(l).toLocaleDateString("en-GB"),
        total: sales?.data[index],
      })) || [],
    [sales]
  );

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData}>
        <XAxis
          dataKey="sale"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip animationEasing="ease-in-out" />
        <Bar
          dataKey="total"
          fill={theme !== "dark" ? "#fab41d" : "#1dfaa5"}
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
