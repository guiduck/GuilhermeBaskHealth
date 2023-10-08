"use client";

import { ReactNode, useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../Card";

interface SummaryProps {
  title: string;
  values: number[];
  icon: ReactNode;
}

const getValue = (values: number[]) =>
  values?.reduce((total, value) => total + value, 0);

const getHighest = (values: number[]) => Math.max(...(values || []));

export default function Summary({ title, values, icon }: SummaryProps) {
  const value = useMemo(() => getValue(values) || "", [values]);

  const highest = useMemo(() => getHighest(values) || "", [values]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{highest} highest</p>
      </CardContent>
    </Card>
  );
}
