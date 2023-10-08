import { ChartType } from "@/components/DashboardComponents/types";
import { create } from "zustand";

type ActionsType = {
  setSales: (sales: ChartType) => void;
};

interface StoreProps {
  state: ChartType;
  actions: ActionsType;
}

export const useSalesStore = create<StoreProps>((set) => ({
  state: {
    labels: [],
    data: [],
  },
  actions: {
    setSales: (newSales) => set(() => ({ state: newSales })),
  },
}));
