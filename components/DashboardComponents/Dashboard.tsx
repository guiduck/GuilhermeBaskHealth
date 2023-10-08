"use client";

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
import { ChartBar } from "./ChartBar";
import { DashbaordDataType } from "./types";
import { ChartLine } from "./ChartLine";
import { ProductsTable } from "./ProductsTable";
import { TableCaption } from "../ui/table";
import { useWidgetsStore } from "@/stores/widgets";
import { TransactionsTable } from "./TransactionsTable";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import GlobeScene from "@/scenes/Globe/globeScene";
export default function Dashboard({
  dashboardData,
}: {
  dashboardData: DashbaordDataType;
}) {
  const { displayItems } = useWidgetsStore();
  console.log(displayItems);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2 opacity-80">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div>
          <p className="text-[0.8rem] text-muted-foregrounds">
            Select the widgets you want to display in the Dashboard.
          </p>
          <Suspense fallback={<Skeleton className="flex gap-12" />}>
            <div className="flex gap-12">
              <DisplayForm
                displayLabel="Widgets"
                items={[
                  {
                    id: "salesOverTime",
                    label: "sales over time",
                  },
                  {
                    id: "userEngagement",
                    label: "user engagement",
                  },
                  {
                    id: "recentTransactions",
                    label: "recent transactions",
                  },
                  { id: "topProducts", label: "top products" },
                  { id: "map", label: "map" },
                ]}
              />
            </div>
          </Suspense>
        </div>
        <Button>Edit workspace</Button>
      </div>

      <Tabs defaultValue="salesOverTime" className="space-y-4">
        <TabsContent value="salesOverTime" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Subscriptions
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Now
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Suspense fallback={<Skeleton className="col-span-4" />}>
              {displayItems?.includes("salesOverTime") && (
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Sales over time</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2 ">
                    <ChartBar sales={dashboardData?.charts?.salesOverTime} />
                  </CardContent>
                </Card>
              )}
            </Suspense>

            <Suspense fallback={<Skeleton className="col-span-3" />}>
              {displayItems?.includes("recentTransactions") && (
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>
                      You traded $
                      {dashboardData?.tables?.recentTransactions?.reduce(
                        (total, transaction) =>
                          total + parseInt(transaction?.amount?.slice(1)),
                        0
                      )}{" "}
                      this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TransactionsTable
                      recentTransactions={
                        dashboardData?.tables?.recentTransactions
                      }
                    />
                    <TableCaption className="flex w-full">
                      A list of your recent transactions.
                    </TableCaption>
                  </CardContent>
                </Card>
              )}
            </Suspense>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Suspense fallback={<Skeleton className="col-span-4" />}>
              {displayItems?.includes("userEngagement") && (
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>User Engagement</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <ChartLine
                      userEngagement={dashboardData?.charts?.userEngagement}
                    />
                  </CardContent>
                </Card>
              )}
            </Suspense>

            <Suspense fallback={<Skeleton className="col-span-3" />}>
              {displayItems?.includes("topProducts") && (
                <Card className="col-span-3">
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
              )}
            </Suspense>
          </div>
        </TabsContent>
      </Tabs>
      <div className="grid gap-4 md:grid-cols-1 h-[600px]">
        <Suspense fallback={<Skeleton className="col-span-6" />}>
          {displayItems?.includes("map") && (
            <Card className="col-span-6">
              <CardHeader>
                <CardTitle>Your Locations</CardTitle>
              </CardHeader>
              <CardContent className="pl-2 h-[600px]">
                <GlobeScene mapData={dashboardData?.map?.locations} />
              </CardContent>
            </Card>
          )}
        </Suspense>
      </div>
    </div>
  );
}
