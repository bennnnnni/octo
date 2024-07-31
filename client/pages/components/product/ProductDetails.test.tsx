import { render } from "@testing-library/react";
import { ProductDetail } from "./ProductDetail";

describe("component: ProductDetail", () => {
  test("should render children", () => {
    const { getByText } = render(
      <ProductDetail>
        <p>Child content</p>
      </ProductDetail>
    );
    const childContent = getByText("Child content");
    expect(childContent).toBeInTheDocument();
  });

  test("should apply dark background styling when variant is 'dark'", () => {
    const { container } = render(
      <ProductDetail variant="dark">
        <p>Child content</p>
      </ProductDetail>
    );
    expect(container.firstChild).toHaveClass(
      "bg-siphon",
      "p-3",
      "w-full",
      "flex",
      "justify-center"
    );
  });

  test("should apply bright background styling when variant is 'bright'", () => {
    const { container } = render(
      <ProductDetail variant="bright">
        <p>Child content</p>
      </ProductDetail>
    );
    expect(container.firstChild).toHaveClass(
      "bg-hemocyanin",
      "p-3",
      "w-full",
      "flex",
      "justify-center"
    );
  });

  test("should apply dark background styling by default", () => {
    const { container } = render(
      <ProductDetail>
        <p>Child content</p>
      </ProductDetail>
    );
    expect(container.firstChild).toHaveClass(
      "bg-siphon",
      "p-3",
      "w-full",
      "flex",
      "justify-center"
    );
  });
});
