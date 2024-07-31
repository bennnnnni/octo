import { render } from "@testing-library/react";
import { ProductDescription } from "./ProductDescription";

// Mock data
const mockDescription = "This is a detailed description of the product.";

test("should render the product description heading", () => {
  const { getByText } = render(
    <ProductDescription description={mockDescription} />
  );
  const headingElement = getByText("Description");
  expect(headingElement).toBeInTheDocument();
});

test("should render the product description", () => {
  const { getByText } = render(
    <ProductDescription description={mockDescription} />
  );
  const descriptionElement = getByText(mockDescription);
  expect(descriptionElement).toBeInTheDocument();
  expect(descriptionElement).toHaveClass("text-sm font-light tracking-wide");
});
