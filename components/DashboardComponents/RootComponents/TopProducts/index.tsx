"use client";

import { useWidgetsStore } from "@/src/stores/widgets";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../Card";
import { ProductsTable } from "../../ProductsTable";
import { TopProductsType } from "../../types";

export default function TopProducts({
  productsData,
}: {
  productsData: TopProductsType;
}) {
  const { displayItems } = useWidgetsStore();
  return (
    <>
      {displayItems?.includes("topProducts") ? (
        <Card className="col-span-6 md:col-span-4 lg:col-span-3">
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>
              {productsData?.reduce(
                (total, product) => total + product?.sales,
                0
              )}{" "}
              sales this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProductsTable topProducts={productsData || []} />
          </CardContent>
        </Card>
      ) : undefined}
    </>
  );
}
