import { Tabs, TabsContent } from "@/components/Tabs";
import { DashbaordDataType } from "./types";
import RecentTransactions from "../RecentTransactions";
import DashboardHeader from "./RootComponents/DashboardHeader";
import Summary from "./RootComponents/Summary";
import { Icons } from "../Icons";
import SalesOverTime from "./RootComponents/SalesOverTime";
import UserEngagement from "./RootComponents/UserEngagement/index";
import TopProducts from "./RootComponents/TopProducts";
import WorldMap from "./RootComponents/WorldMap";

export default function Dashboard({
  dashboardData,
}: {
  dashboardData: DashbaordDataType;
}) {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <DashboardHeader />

      <Tabs defaultValue="salesOverTime" className="space-y-4">
        <TabsContent value="salesOverTime" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Summary
              title="Sales"
              values={dashboardData?.charts?.salesOverTime.data}
              icon={<Icons.dollar />}
              itemString="$"
            />
            <Summary
              title="Transactions"
              values={dashboardData?.tables?.recentTransactions.map((obj) =>
                parseInt(obj?.amount?.slice(1))
              )}
              icon={<Icons.wallet />}
              itemString="$"
            />
            <Summary
              title="Organic visits"
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
            <SalesOverTime salesData={dashboardData?.charts?.salesOverTime} />
            <RecentTransactions dashboardData={dashboardData} />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <UserEngagement usersData={dashboardData?.charts?.userEngagement} />
            <TopProducts productsData={dashboardData?.tables?.topProducts} />
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-1 h-[600px]">
        <WorldMap locations={dashboardData?.map?.locations} />
      </div>
    </div>
  );
}
