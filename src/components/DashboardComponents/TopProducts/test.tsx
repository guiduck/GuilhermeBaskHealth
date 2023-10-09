import { render, screen } from "@testing-library/react";
import TopProducts from ".";

class ResizeObserver {
  observe() {}
  unobserve() {}
}

describe("TopProducts", () => {
  window.ResizeObserver = ResizeObserver;
  it("renders correctly when displayItems includes 'topProducts'", () => {
    render(<TopProducts productsData={[{ id: "", name: "", sales: 0 }]} />);

    expect(screen.getByText("Top Products")).toBeInTheDocument();
  });
});
