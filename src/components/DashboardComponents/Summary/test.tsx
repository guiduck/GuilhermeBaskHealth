import { render } from "@testing-library/react";
import Summary from ".";

class ResizeObserver {
  observe() {}
  unobserve() {}
}

describe("SalesOverTime", () => {
  window.ResizeObserver = ResizeObserver;
  test("renders Summary component with valid props", () => {
    const title = "Test Title";
    const values = [1, 2, 3];
    const icon = <div>Icon</div>;
    const itemString = "Item";

    const { getByText } = render(
      <Summary
        title={title}
        values={values}
        icon={icon}
        itemString={itemString}
      />
    );

    const titleElement = getByText(title);
    const valueElement = getByText(`Item 6`);
    const highestElement = getByText(`Item 3 highest`);

    expect(titleElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
    expect(highestElement).toBeInTheDocument();
  });

  test("renders Summary component with zero values", () => {
    render(<Summary title="" values={[]} icon={null} />);
  });

  test("renders Summary component with non-empty itemString", () => {
    const title = "Test Title";
    const values = [1, 2, 3];
    const itemString = "Item";
    const icon = <div>Icon</div>;

    const { getByText } = render(
      <Summary
        title={title}
        values={values}
        itemString={itemString}
        icon={icon}
      />
    );

    const titleElement = getByText(title);
    const valueElement = getByText("Item 6");

    expect(titleElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });

  test("renders Summary component with empty itemString", () => {
    render(
      <Summary title="Test Summary" values={[1, 2, 3]} icon={<div>Icon</div>} />
    );
  });

  test("renders Summary component with valid icon", () => {
    const title = "Test Title";
    const values = [1, 2, 3];
    const icon = <div>Icon</div>;
    const { getByText } = render(
      <Summary title={title} values={values} icon={icon} />
    );

    const titleElement = getByText(title);
    const iconElement = getByText("Icon");

    expect(titleElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});
