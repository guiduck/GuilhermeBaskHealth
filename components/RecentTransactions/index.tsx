import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../DashboardComponents/Card";
import { TransactionsTable } from "../DashboardComponents/TransactionsTable";
import { DashbaordDataType } from "../DashboardComponents/types";
import { TableCaption } from "../ui/table";

const RecentTransactions = ({
  dashboardData,
}: {
  dashboardData: DashbaordDataType;
}) => {
  return (
    <Card className="col-span-6 md:col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>
          You traded $
          {dashboardData?.tables?.recentTransactions?.reduce(
            (total, transaction) =>
              total + parseInt(transaction?.amount?.slice(1)),
            0
          )}{" "}
          this month.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TransactionsTable
          recentTransactions={dashboardData?.tables?.recentTransactions}
        />
        <TableCaption className="flex w-full">
          A list of your recent transactions.
        </TableCaption>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
