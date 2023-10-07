import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartType } from "../types";

export async function ChartBar({ sales }: { sales: ChartType }) {
  const chartData =
    sales?.labels?.map((l, index) => ({
      name: l,
      total: sales?.data[index],
    })) || [];

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
