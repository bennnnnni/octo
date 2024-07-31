import { render, fireEvent } from "@testing-library/react";
import { ProductActions } from "./ProductActions";

// Mock data
const mockProps = {
  price: 1299,
  selectedQuantity: 2,
  onIncrease: jest.fn(),
  onDecrease: jest.fn(),
  onAdd: jest.fn(),
};

describe("component: ProductActions", () => {
  test("should display the price correctly", () => {
    const { getByText } = render(<ProductActions {...mockProps} />);
    const priceElement = getByText(`£${(mockProps.price / 100).toFixed(2)}`);
    expect(priceElement).toBeInTheDocument();
    expect(priceElement).toHaveClass("text-xl");
  });

  test("should display the selected quantity", () => {
    const { getByTitle } = render(<ProductActions {...mockProps} />);
    const quantityElement = getByTitle("Current quantity");
    expect(quantityElement).toBeInTheDocument();
    expect(quantityElement).toHaveTextContent(
      mockProps.selectedQuantity.toString()
    );
    expect(quantityElement).toHaveClass("text-xl");
  });

  test("should disable decrease button when quantity is 1", () => {
    const { getByText } = render(
      <ProductActions {...mockProps} selectedQuantity={1} />
    );
    const decreaseButton = getByText("-");
    expect(decreaseButton).toBeDisabled();
  });

  test("should disable increase button when quantity is 50", () => {
    const { getByText } = render(
      <ProductActions {...mockProps} selectedQuantity={50} />
    );
    const increaseButton = getByText("+");
    expect(increaseButton).toBeDisabled();
  });

  test("should call onIncrease when increase button is clicked", () => {
    const { getByText } = render(<ProductActions {...mockProps} />);
    const increaseButton = getByText("+");
    fireEvent.click(increaseButton);
    expect(mockProps.onIncrease).toHaveBeenCalledTimes(1);
  });

  test("should call onDecrease when decrease button is clicked", () => {
    const { getByText } = render(<ProductActions {...mockProps} />);
    const decreaseButton = getByText("-");
    fireEvent.click(decreaseButton);
    expect(mockProps.onDecrease).toHaveBeenCalledTimes(1);
  });

  test("should call onAdd when add to cart button is clicked", () => {
    const { getByText } = render(<ProductActions {...mockProps} />);
    const addButton = getByText("Add to cart");
    fireEvent.click(addButton);
    expect(mockProps.onAdd).toHaveBeenCalledTimes(1);
  });

  test("should apply custom styles to buttons", () => {
    const { getByText } = render(<ProductActions {...mockProps} />);
    const decreaseButton = getByText("-");
    const increaseButton = getByText("+");
    const addButton = getByText("Add to cart");

    expect(decreaseButton).toHaveClass("h-7 w-7 text-sm");
    expect(increaseButton).toHaveClass("h-7 w-7 text-sm");
    expect(addButton).toHaveClass("min-w-full p-4 text-sm");
  });
});
