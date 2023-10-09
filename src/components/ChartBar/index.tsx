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

export default function ChartBar({ sales }: { sales: ChartType }) {
  const chartData = useMemo(
    () =>
      sales?.labels?.map((l, index) => ({
        name: new Date(l).toLocaleDateString("en-GB"),
        total: sales?.data[index],
      })) || [],
    [sales]
  );

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData}>
        <XAxis
          dataKey="name"
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
        <Tooltip />
        <Bar dataKey="total" fill="#fab41d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
