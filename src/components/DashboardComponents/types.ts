import { dashboardDataMock } from "./mocks";

export type ChartType = {
  labels: string[];
  data: number[];
};

export type RecentTransactionsType =
  typeof dashboardDataMock.tables.recentTransactions;

export type TopProductsType = typeof dashboardDataMock.tables.topProducts;

export type LocationsType = typeof dashboardDataMock.map.locations;

export type DashbaordDataType = {
  charts: {
    salesOverTime: ChartType;
    userEngagement: ChartType;
  };
  tables: {
    recentTransactions: RecentTransactionsType;
    topProducts: TopProductsType;
  };
  map: {
    locations: LocationsType;
  };
};
