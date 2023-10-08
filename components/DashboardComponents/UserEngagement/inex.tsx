"use client";

import { useWidgetsStore } from "@/src/stores/widgets";
import { Card, CardHeader, CardTitle, CardContent } from "../Card";
import { ChartLine } from "../ChartLine";
import { ChartType } from "../types";

export default function UserEngagement({
  usersData,
}: {
  usersData: ChartType;
}) {
  const { displayItems } = useWidgetsStore();
  return (
    <>
      {displayItems?.includes("userEngagement") ? (
        <Card className="col-span-6 md:col-span-4 overflow-x-auto">
          <CardHeader>
            <CardTitle>User Engagement</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ChartLine userEngagement={usersData} />
          </CardContent>
        </Card>
      ) : undefined}
    </>
  );
}
