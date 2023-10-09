import Dashboard from "@/components/DashboardComponents/Dashboard";
import { ToggleMode } from "@/components/ToggleMode";
import api from "@/services/api";
import { Metadata } from "next";
import { redirect } from "next/navigation";

import { cache } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "User dashboard for data visualization.",
};

export const revalidate = 5;

const getUserData = cache(async () => {
  const path = `${process.env.NEXT_PUBLIC_API_URL}/api/get`;
  try {
    const { data } = await api.get(path);
    if (data.success) {
      return data.data.dashboardData;
    } else if (data.secretMessage) {
      throw Error(
        data?.secretMessage || "There was an error with your request"
      );
    }
  } catch (err: any) {
    if (!err?.response?.data?.success && err?.response?.data?.message) {
      console.error(err.response?.data?.message || err.message);
      redirect("/auth");
    }
  }
});

export default async function Home() {
  const dashboardData = await getUserData();

  return (
    <div className="w-screen bg-[#F8FAFC] dark:bg-[#020817] overflow-hidden">
      <div className="w-full max-w-[1440px] mb-20 m-0 mx-auto bg-slate-50 dark:bg-[#020817]">
        <div className="flex-col flex relative">
          <div className="flex flex-1 space-y-4 p-8 pt-6 pb-0 justify-between">
            <div />
            <ToggleMode />
          </div>
          <Dashboard dashboardData={dashboardData} />
        </div>
      </div>
    </div>
  );
}
