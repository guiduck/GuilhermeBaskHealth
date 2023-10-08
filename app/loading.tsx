import { Button } from "@/components/ButtonNy";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/DashboardComponents/Card";
import DashboardHeader from "@/components/DashboardHeader";
import { ToggleMode } from "@/components/ToggleMode";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-screen bg-[#F8FAFC] dark:bg-[#020817]">
      <div className="w-full max-w-6xl m-0 mx-auto bg-slate-50 dark:bg-[#020817]">
        <div className="flex-col flex relative">
          <div className="flex flex-1 space-y-4 p-8 pt-6 pb-0 justify-between">
            <div />
            <ToggleMode />
          </div>

          {/* here starts dashboard */}

          <div className="flex-1 space-y-4 p-8 pt-6">
            <DashboardHeader />

            <div className="space-y-4">
              <div className="space-y-4">
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
                      <CardTitle className="text-sm font-medium">
                        Sales
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
                  {
                    /* displayItems?.includes("salesOverTime") && */ <Card className="col-span-4">
                      <CardHeader>
                        <CardTitle>Sales over time</CardTitle>
                      </CardHeader>
                      <CardContent className="pl-2 ">
                        <Skeleton className="w-full h-[370px]" />
                      </CardContent>
                    </Card>
                  }

                  {/* <RecentTransactions dashboardData={dashboardData} /> */}

                  {/* <Suspense fallback={<Skeleton className="col-span-3" />}>
              {
                displayItems?.includes("recentTransactions") && <Card className="col-span-3">
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
              }
            </Suspense> */}
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Skeleton className="col-span-4">
                    <CardHeader>
                      <CardTitle>User Engagement</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      {/* <Skeleton className="w-full h-[370px]" /> */}
                    </CardContent>
                  </Skeleton>

                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Top Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="w-full h-[370px]" />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-1 h-[600px]">
              <Card className="col-span-6">
                <CardHeader>
                  <CardTitle>Your Locations</CardTitle>
                </CardHeader>
                <CardContent className="pl-2 h-[600px]">
                  <Skeleton className="w-full h-[370px]" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
