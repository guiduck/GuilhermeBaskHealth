"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle, CardContent } from "../../Card";
import { LocationsType } from "../types";
import { useWidgetsStore } from "@/stores/widgets";
import dynamic from "next/dynamic";

const GlobeScene = dynamic(() => import("@/scenes/Globe/globeScene"), {
  loading: () => <Skeleton className="w-full h-[576px]" />,
  ssr: false,
});

export default function WorldMap({ locations }: { locations: LocationsType }) {
  const { displayItems } = useWidgetsStore();

  if (!displayItems?.includes("map")) {
    return;
  }

  return (
    <div className="grid gap-4 grid-cols-1 h-[600px]">
      <Card className="col-span-6">
        <CardHeader>
          <CardTitle>Your Locations</CardTitle>
        </CardHeader>
        <CardContent className="pl-2 h-[600px]">
          <GlobeScene mapData={locations} />
        </CardContent>
      </Card>
    </div>
  );
}
