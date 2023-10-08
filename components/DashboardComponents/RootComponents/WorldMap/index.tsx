"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle, CardContent } from "../../Card";
import { LocationsType } from "../../types";
import { useWidgetsStore } from "@/src/stores/widgets";
import dynamic from "next/dynamic";

const GlobeScene = dynamic(() => import("@/src/scenes/Globe/globeScene"), {
  loading: () => <Skeleton className="w-full h-[576px]" />,
  ssr: false,
});

export default function WorldMap({ locations }: { locations: LocationsType }) {
  const { displayItems } = useWidgetsStore();
  return (
    <>
      {displayItems?.includes("map") ? (
        <Card className="col-span-6">
          <CardHeader>
            <CardTitle>Your Locations</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 h-[600px]">
            <GlobeScene mapData={locations} />
          </CardContent>
        </Card>
      ) : undefined}
    </>
  );
}
