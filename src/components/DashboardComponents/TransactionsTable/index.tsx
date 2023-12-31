import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RecentTransactionsType } from "../types";

export function TransactionsTable({
  recentTransactions,
}: {
  recentTransactions: RecentTransactionsType;
}) {
  const columns = Object.keys(recentTransactions?.[0] || {});

  return (
    <div className="max-h-[400px] overflow-y-scroll">
      <Table>
        <TableHeader>
          <TableRow>
            {columns?.length > 0 &&
              columns.map((tableHeader, index) => (
                <TableHead
                  key={tableHeader}
                  className={`${index === 0 && "w-[50px]"} ${
                    index === columns.length - 1 && "text-right m-r-5"
                  }`}
                >
                  {tableHeader}
                </TableHead>
              ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentTransactions?.length > 0 &&
            recentTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>{transaction.user}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell className="text-right">
                  {new Date(transaction.date).toLocaleDateString("en-GB")}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
