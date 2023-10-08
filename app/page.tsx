import Dashboard from "@/components/DashboardComponents/Dashboard";
import { MainNav } from "@/components/DashboardComponents/MainNav";
import { UserNav } from "@/components/DashboardComponents/UserNav";
import api from "@/services/api";
import { Metadata } from "next";

import { Suspense, cache } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "User dashboard for data visualization.",
};

export const revalidate = 5; //revalidate every 5 seconds

const getUserData = cache(async () => {
  const path = `${process.env.NEXT_PUBLIC_API_URL}/api/get`;
  try {
    const { data } = await api.get(path);
    if (data.success) {
      console.log(data);
      return data.data.dashboardData;
    } else {
      console.log(data.secretMessage);
    }
  } catch (error) {
    console.error(error);
  }
});

export default async function Home() {
  // const awaiting = await new Promise((resolve) => setTimeout(resolve, 5000));
  const dashboardData = await getUserData();
  return (
    <>
      <div className="w-full h-16 bg-slate-50 dark:bg-[#020817]" />
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto">
              <UserNav />
            </div>
          </div>
        </div>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {dashboardData && <Dashboard dashboardData={dashboardData} />}
        {/* </Suspense> */}
      </div>
    </>
  );
}
