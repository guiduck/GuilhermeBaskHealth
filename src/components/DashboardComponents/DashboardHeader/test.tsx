import { render, screen } from "@testing-library/react";
import DashboardHeader from ".";

class ResizeObserver {
  observe() {}
  unobserve() {}
}

describe("DashboardHeader", () => {
  window.ResizeObserver = ResizeObserver;
  test("renders DashboardHeader component with correct content", () => {
    render(<DashboardHeader />);
  });

  test("should render UserNav component within DashboardHeader component", () => {
    render(<DashboardHeader />);
    expect(screen.getByTestId("user-nav")).toBeInTheDocument();
  });

  test("should display correct number of items in DisplayForm component", () => {
    render(<DashboardHeader />);
    const items = screen.getAllByTestId("display-item");
    expect(items.length).toBe(5);
  });

  test("renders correct labels for items", () => {
    const { getByText } = render(<DashboardHeader />);

    const salesOverTimeLabel = getByText("sales over time");
    const userEngagementLabel = getByText("user engagement");
    const recentTransactionsLabel = getByText("recent transactions");
    const topProductsLabel = getByText("top products");
    const mapLabel = getByText("map");

    expect(salesOverTimeLabel).toBeInTheDocument();
    expect(userEngagementLabel).toBeInTheDocument();
    expect(recentTransactionsLabel).toBeInTheDocument();
    expect(topProductsLabel).toBeInTheDocument();
    expect(mapLabel).toBeInTheDocument();
  });
});
