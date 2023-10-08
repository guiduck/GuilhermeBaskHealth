import { create } from "zustand";

interface StoreProps {
  salesOverTime: boolean;
  userEngagement: boolean;
  setSales: () => void;
  setEngagement: () => void;
}

export const useChartStore = create<StoreProps>((set) => ({
  salesOverTime: true,
  userEngagement: true,
  setSales: () => set((state) => ({ salesOverTime: !state.salesOverTime })),
  setEngagement: () =>
    set((state) => ({ userEngagement: !state.userEngagement })),
}));
