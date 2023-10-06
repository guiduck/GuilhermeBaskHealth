"use client";

import { useUserEngagementStore } from "@/stores/userEngagement";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export async function ChartLine() {
  const {
    state: { labels, data },
  } = useUserEngagementStore();

  const chartData = useMemo(
    () => labels.map((l, index) => ({ name: l, uv: data[index] })),
    [labels, data]
  );
  console.log("sales over time chart: ", chartData);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={500}
        height={400}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          connectNulls
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
