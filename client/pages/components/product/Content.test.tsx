import { render } from "@testing-library/react";
import { Content } from "./Content";

describe.only("component: Content", () => {
  test("should render children", () => {
    const { getByText } = render(
      <Content>
        <p>Child content</p>
      </Content>
    );
    const childContent = getByText("Child content");
    expect(childContent).toBeInTheDocument();
  });

  test("should render heading when provided", () => {
    const { getByText } = render(
      <Content heading="Test Heading">
        <p>Child content</p>
      </Content>
    );
    const heading = getByText("Test Heading");
    expect(heading).toBeInTheDocument();
  });

  test("should not render heading when not provided", () => {
    const { queryByRole } = render(
      <Content>
        <p>Child content</p>
      </Content>
    );
    const heading = queryByRole("heading");
    expect(heading).not.toBeInTheDocument();
  });

  test("should apply custom styling", () => {
    const { container } = render(
      <Content customStyling="custom-class">
        <p>Child content</p>
      </Content>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  test("should have default styling", () => {
    const { container } = render(
      <Content>
        <p>Child content</p>
      </Content>
    );
    expect(container.firstChild).toHaveClass(
      "max-w-[22.5rem]",
      "grow",
      "flex",
      "flex-col"
    );
  });
});
