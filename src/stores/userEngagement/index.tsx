import { ChartType } from "@/components/DashboardComponents/types";
import { create } from "zustand";

type actionsType = {
  setUserEngagement: (userEngagement: ChartType) => void;
};

interface StoreProps {
  state: ChartType;
  actions: actionsType;
}

export const useUserEngagementStore = create<StoreProps>((set) => ({
  state: {
    labels: [],
    data: [],
  },
  actions: {
    setUserEngagement: (newUserEngagement) =>
      set((state) => {
        console.log("userengagement", state);
        return { state: newUserEngagement };
      }),
  },
}));
