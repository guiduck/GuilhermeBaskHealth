import { Button } from "@/components/ButtonNy";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/DashboardComponents/Card";
import { Tabs, TabsContent } from "@/components/Tabs";
import { DisplayForm } from "@/components/DashboardComponents/DisplayForm";
import { DashbaordDataType } from "./types";
import { ChartLine } from "./ChartLine";
import { ProductsTable } from "./ProductsTable";
import { TableCaption } from "../ui/table";
import { useWidgetsStore } from "@/stores/widgets";
import { TransactionsTable } from "./TransactionsTable";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import GlobeScene from "@/scenes/Globe/globeScene";
import dynamic from "next/dynamic";
import RecentTransactions from "../RecentTransactions";
import DashboardHeader from "../DashboardHeader";
import Summary from "./Summary";
import { Icons } from "../Icons";

const DynamicChartBar = dynamic(() => import("./ChartBar"), {
  loading: () => <Skeleton className="w-full h-[370px]" />,
});

export default function Dashboard({
  dashboardData,
}: {
  dashboardData: DashbaordDataType;
}) {
  // const { displayItems } = useWidgetsStore();
  // console.log(displayItems);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <DashboardHeader />
      {/* Summary content  */}
      <Tabs defaultValue="salesOverTime" className="space-y-4">
        <TabsContent value="salesOverTime" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Summary
              title="Sales"
              values={dashboardData?.charts?.salesOverTime.data}
              icon={<Icons.dollar />}
            />
            <Summary
              title="Transactions"
              values={dashboardData?.tables?.recentTransactions.map((obj) =>
                parseInt(obj?.amount?.slice(1))
              )}
              icon={<Icons.wallet />}
            />
            <Summary
              title="Users"
              values={dashboardData?.charts?.userEngagement.data}
              icon={<Icons.users />}
            />
            <Summary
              title="Products"
              values={dashboardData?.tables?.topProducts.map(
                (product) => product?.sales
              )}
              icon={<Icons.chart />}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {
              /* displayItems?.includes("salesOverTime") && */
              <Card className="col-span-6 md:col-span-4 overflow-x-auto">
                <CardHeader>
                  <CardTitle>Sales over time</CardTitle>
                </CardHeader>
                <CardContent className="pl-2 ">
                  <DynamicChartBar
                    sales={dashboardData?.charts?.salesOverTime}
                  />
                </CardContent>
              </Card>
            }

            <RecentTransactions dashboardData={dashboardData} />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {
              /* displayItems?.includes("userEngagement") && */
              <Card className="col-span-6 md:col-span-4 overflow-x-auto">
                <CardHeader>
                  <CardTitle>User Engagement</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <ChartLine
                    userEngagement={dashboardData?.charts?.userEngagement}
                  />
                </CardContent>
              </Card>
            }

            {
              /* displayItems?.includes("topProducts") && */
              <Card className="col-span-6 md:col-span-4 lg:col-span-3">
                <CardHeader>
                  <CardTitle>Top Products</CardTitle>
                  <CardDescription>
                    {dashboardData?.tables?.topProducts?.reduce(
                      (total, product) => total + product?.sales,
                      0
                    )}{" "}
                    sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ProductsTable
                    topProducts={dashboardData?.tables?.topProducts}
                  />
                </CardContent>
              </Card>
            }
          </div>
        </TabsContent>
      </Tabs>
      <div className="grid gap-4 md:grid-cols-1 h-[600px]">
        {/* {displayItems?.includes("map") && ( */}
        <Card className="col-span-6">
          <CardHeader>
            <CardTitle>Your Locations</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 h-[600px]">
            {/* <GlobeScene mapData={dashboardData?.map?.locations} /> */}
          </CardContent>
        </Card>
        {/* )} */}
      </div>
    </div>
  );
}
