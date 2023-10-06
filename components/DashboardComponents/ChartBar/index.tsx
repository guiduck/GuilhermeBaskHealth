"use client";

import { useSalesStore } from "@/stores/salesOverTime";
import { useMemo } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export async function ChartBar() {
  const {
    state: { labels, data },
  } = useSalesStore();

  const chartData = useMemo(
    () => labels.map((l, index) => ({ name: l, total: data[index] })),
    [labels, data]
  );
  console.log("sales over time chart: ", chartData);

  return (
    <ResponsiveContainer width="100%" height={350}>
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
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
