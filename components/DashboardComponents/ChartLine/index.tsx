"use client";

import { useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartType } from "../types";

export async function ChartLine({
  userEngagement,
}: {
  userEngagement: ChartType;
}) {
  const chartData = useMemo(
    () =>
      userEngagement?.labels?.map((l, index) => ({
        name: l,
        uv: userEngagement?.data[index],
      })),
    [userEngagement]
  );

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
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="users" />
        <YAxis />
        <Tooltip />
        <Line
          connectNulls
          type="linear"
          dataKey="uv"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
