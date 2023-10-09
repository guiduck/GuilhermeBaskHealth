"use client";

import dynamic from "next/dynamic";
import { Card, CardHeader, CardTitle, CardContent } from "../../Card";
import { ChartType } from "../types";
import { Skeleton } from "@/components/ui/skeleton";
import { useWidgetsStore } from "@/stores/widgets";

const ChartBar = dynamic(() => import("../../ChartBar"), {
  loading: () => <Skeleton className="w-full h-[420px]" />,
  ssr: false,
});

export default function SalesOverTime({ salesData }: { salesData: ChartType }) {
  const { displayItems } = useWidgetsStore();

  return (
    <>
      {displayItems?.includes("salesOverTime") ? (
        <Card className="col-span-6 md:col-span-4 overflow-x-auto">
          <CardHeader>
            <CardTitle>Sales over time</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 ">
            <ChartBar sales={salesData} />
          </CardContent>
        </Card>
      ) : undefined}
    </>
  );
}
