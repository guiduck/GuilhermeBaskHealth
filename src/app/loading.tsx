import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/DashboardComponents/Card";
import { Icons } from "@/components/Icons";
import { ToggleMode } from "@/components/ToggleMode";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-screen bg-[#F8FAFC] dark:bg-[#020817]">
      <div className="w-full max-w-[1440px] mb-20 m-0 mx-auto bg-slate-50 dark:bg-[#020817]">
        <div className="flex-col flex relative">
          <div className="flex flex-1 space-y-4 p-8 pt-6 pb-0 justify-between">
            <div />
            <ToggleMode />
          </div>

          {/* dashboard */}
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2 opacity-80">
              <div className="flex flex-col gap-12">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <div>
                  <p className="text-[0.8rem] text-muted-foregrounds mb-4">
                    Select the widgets you want to display in the Dashboard.
                  </p>
                  <div className="flex gap-12">
                    <Skeleton className="grid gap-2 w-full h-[80px] lg:h-[40px] lg:w-[714px] grid-cols-3 lg:flex lg:gap-6" />
                  </div>
                </div>
              </div>
              <div className="self-baseline md:self-end pb-8">
                <Skeleton className="w-[48px] h-[48px] rounded-full" />
              </div>
            </div>

            {/* summary */}

            <div className="space-y-4">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <Skeleton className="font-semibold leading-none tracking-tight">
                        sales
                      </Skeleton>
                      <Icons.dollar />
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                      <Skeleton className="h-8 w-full" />
                      <Skeleton className="h-3 w-full" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <Skeleton className="font-semibold leading-none tracking-tight">
                        Transactions
                      </Skeleton>
                      <Icons.wallet />
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                      <Skeleton className="h-8 w-full" />
                      <Skeleton className="h-3 w-full" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <Skeleton className="font-semibold leading-none tracking-tight">
                        Organic visits
                      </Skeleton>
                      <Icons.users />
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                      <Skeleton className="h-8 w-full" />
                      <Skeleton className="h-3 w-full" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <Skeleton className="font-semibold leading-none tracking-tight">
                        Products
                      </Skeleton>
                      <Icons.chart />
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                      <Skeleton className="h-8 w-full" />
                      <Skeleton className="h-3 w-full" />
                    </CardContent>
                  </Card>
                </div>
                {/* sales over time */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-6 md:col-span-4 overflow-x-auto">
                    <CardHeader>
                      <Skeleton className="h[16px] tracking-tight" />
                    </CardHeader>
                    <CardContent className="pl-2 ">
                      <Skeleton className="w-full h-[370px]" />
                    </CardContent>
                  </Card>

                  {/* recent transactions */}
                  <Card className="col-span-6 md:col-span-4 lg:col-span-3">
                    <CardContent>
                      <Skeleton className="h-[504px] mt-4 w-full" />
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  {/* user engagement  */}
                  <Card className="col-span-6 md:col-span-4 overflow-x-auto">
                    <CardContent className="pl-2">
                      <Skeleton className="w-full mt-4 h-[468px]" />
                    </CardContent>
                  </Card>

                  {/* top products */}
                  <Card className="col-span-6 md:col-span-4 lg:col-span-3">
                    <CardContent>
                      <Skeleton className="w-full mt-4 h-[468px]" />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-1 h-[600px]">
              {/* world map */}
              <Card className="col-span-6">
                <CardContent className="pl-2 h-[600px]">
                  <Skeleton className="w-full mt-4 h-[552px]" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
