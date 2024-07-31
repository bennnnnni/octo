import { render } from "@testing-library/react";
import { ProductInfo } from "./ProductInfo";

//need to mock the next Image component because it lazyloads the imag resulting in a different source
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

// Mock data
const mockData = {
  imgSrc: "https://example.com/image.png",
  name: "Test Product",
  power: "25W",
  quantity: 10,
};

describe("component: ProductInfo", () => {
  test("should render the product image with correct src and alt", () => {
    const { getByAltText } = render(<ProductInfo {...mockData} />);
    const imgElement = getByAltText(`product picture of ${mockData.name}`);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", mockData.imgSrc);
  });

  test("should render the product name", () => {
    const { getByText } = render(<ProductInfo {...mockData} />);
    const nameElement = getByText(mockData.name);
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveClass("text-3xl");
  });

  test("should render the product power and quantity", () => {
    const { getByText } = render(<ProductInfo {...mockData} />);
    const powerQuantityElement = getByText(
      `${mockData.power} // Packet of ${mockData.quantity}`
    );
    expect(powerQuantityElement).toBeInTheDocument();
    expect(powerQuantityElement).toHaveClass(
      "text-purpleHaze",
      "self-start",
      "text-xs"
    );
  });

  test("should apply custom styling to Content component", () => {
    const { container } = render(<ProductInfo {...mockData} />);
    const contentElement = container.querySelector(".gap-2");
    expect(contentElement).toBeInTheDocument();
  });
});
