import Dashboard from "@/components/DashboardComponents/Dashboard";
import { MainNav } from "@/components/DashboardComponents/MainNav";
import { UserNav } from "@/components/DashboardComponents/UserNav";
import api from "@/services/api";
import { Metadata } from "next";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense, cache } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "User dashboard for data visualization.",
};

export const revalidate = 5; //revalidate every 5 seconds

async function redirectUnlogged() {
  const token = cookies().get("userToken");
  if (!token) return redirect("/auth");
  return true;
}

export const getUserData = cache(async () => {
  const path = `${process.env.NEXT_PUBLIC_API_URL}/api/get`;
  console.log(process.env.NEXT_PUBLIC_API_URL);
  try {
    const { data } = await api.get(path);
    console.log(data);
    if (data.success) {
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
        <Suspense fallback={<Loading />}>
          <Dashboard dashboardData={dashboardData} />
        </Suspense>
      </div>
    </>
  );
}
