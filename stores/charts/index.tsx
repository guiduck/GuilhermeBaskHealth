import { create } from "zustand";

interface StoreProps {
  salesOverTime: boolean;
  userEngagement: boolean;
}

const useDashboardStore = create<StoreProps>((set) => ({
  salesOverTime: true,
  userEngagement: true,
  setSales: () => set((state) => ({ salesOverTime: !state.salesOverTime })),
  setEngagement: () =>
    set((state) => ({ userEngagement: !state.userEngagement })),
}));
