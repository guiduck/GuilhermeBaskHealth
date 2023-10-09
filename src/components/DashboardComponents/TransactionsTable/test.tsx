import { render, screen } from "@testing-library/react";
import { TransactionsTable } from ".";

class ResizeObserver {
  observe() {}
  unobserve() {}
}

describe("Transactions table", () => {
  window.ResizeObserver = ResizeObserver;
  test("Table renders correctly with empty recentTransactions data", () => {
    const recentTransactions = [
      {
        id: 0,
        user: "",
        amount: "",
        date: "",
      },
    ];

    render(<TransactionsTable recentTransactions={recentTransactions} />);

    const table = screen.getByRole("table");

    expect(table).toBeInTheDocument();
  });

  test("Table renders correctly with recentTransactions containing one transaction", () => {
    const recentTransactions = [
      {
        id: 1,
        user: "John Doe",
        amount: "100",
        date: "2022-01-01",
      },
    ];

    render(<TransactionsTable recentTransactions={recentTransactions} />);

    const table = document.querySelector("table");
    expect(table).toBeInTheDocument();

    const tableHeaders = document.querySelectorAll("th");
    expect(tableHeaders.length).toBe(4);

    const tableRows = document.querySelectorAll("tr");
    expect(tableRows.length).toBe(2);

    const tableCells = document.querySelectorAll("td");
    expect(tableCells.length).toBe(4);
  });
});
