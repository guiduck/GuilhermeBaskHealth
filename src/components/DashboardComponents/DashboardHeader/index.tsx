import { UserNav } from "@/components/UserNav";
import { DisplayForm } from "../../DisplayForm";

export default function DashboardHeader() {
  return (
    <header>
      <div className="flex items-center justify-between space-y-2 opacity-80">
        <div className="flex flex-col gap-12">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div>
            <p className="text-[0.8rem] text-muted-foregrounds mb-4">
              Select the widgets you want to display in the Dashboard.
            </p>
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
          </div>
        </div>
        <div className="self-baseline md:self-end pb-8" data-testid="user-nav">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
