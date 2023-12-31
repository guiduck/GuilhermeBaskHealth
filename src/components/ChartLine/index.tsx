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
import { ChartType } from "../DashboardComponents/types";
import { useTheme } from "next-themes";

export function ChartLine({ userEngagement }: { userEngagement: ChartType }) {
  const { theme } = useTheme();
  const chartData = useMemo(
    () =>
      userEngagement?.labels?.map((l, index) => ({
        week: l,
        users: userEngagement?.data[index],
      })) || [],
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
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis
          dataKey="week"
          stroke="#888888"
          fontSize={12}
          tickLine
          axisLine
        />
        <YAxis dataKey="users" />
        <Tooltip />
        <Line
          connectNulls
          type="linear"
          dataKey="users"
          stroke={theme === "light" ? "#1eff00" : "#ff00d4"}
          fill={theme === "light" ? "#ff00c8" : "#00c3ff"}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
