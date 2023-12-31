"use client";

import { Avatar, AvatarFallback } from "../Avatar";
import { TopProductsType } from "../DashboardComponents/types";

interface TableItemProps {
  id: string;
  name: string;
  sales: number;
}
function TableItem({ tableItem }: { tableItem: TableItemProps }) {
  return (
    <div className="flex items-center">
      <Avatar className="h-9 w-9">
        <AvatarFallback>{tableItem.id}</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{tableItem.name}</p>
      </div>
      <div className="ml-auto font-medium pr-5">{tableItem.sales}</div>
    </div>
  );
}

export function ProductsTable({
  topProducts,
}: {
  topProducts: TopProductsType;
}) {
  return (
    <div className="space-y-8 max-h-[400px] overflow-y-scroll">
      {topProducts?.length > 0 &&
        topProducts.map((tableRow) => (
          <TableItem key={tableRow.id} tableItem={tableRow} />
        ))}
    </div>
  );
}
