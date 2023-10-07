import { create } from "zustand";

interface StoreProps {
  displayItems: string[];
  setDisplayItems: (items: string[]) => void;
}

export const defaultWdgetState = [
  "recentTransactions",
  "salesOverTime",
  "userEngagement",
  "topProducts",
  "map",
];

export const useWidgetsStore = create<StoreProps>((set) => ({
  displayItems: defaultWdgetState,
  setDisplayItems: (items: string[]) => set(() => ({ displayItems: items })),
}));
