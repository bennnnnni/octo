import { render } from "@testing-library/react";
import { ProductSpecs } from "./ProductSpecs";

// Mock data for ProductSpecsProps
const mockProps = {
  brand: "Philips",
  weight: 77,
  height: 12.6,
  width: 6.2,
  length: 6.2,
  model_code: "E27 ES",
  colour: "Cool daylight",
};

describe("component: ProductSpecs", () => {
  test("should render the product specifications heading", () => {
    const { getByText } = render(<ProductSpecs {...mockProps} />);
    const headingElement = getByText("Specification");
    expect(headingElement).toBeInTheDocument();
  });

  test("should render the product brand", () => {
    const { getByText } = render(<ProductSpecs {...mockProps} />);
    const brandItem = getByText("Brand");
    const brandValue = getByText(mockProps.brand);
    expect(brandItem).toBeInTheDocument();
    expect(brandValue).toBeInTheDocument();
  });

  test("should render the product weight", () => {
    const { getByText } = render(<ProductSpecs {...mockProps} />);
    const weightItem = getByText("Item weight (g)");
    const weightValue = getByText(mockProps.weight.toString());
    expect(weightItem).toBeInTheDocument();
    expect(weightValue).toBeInTheDocument();
  });

  test("should render the product dimensions", () => {
    const { getByText } = render(<ProductSpecs {...mockProps} />);
    const dimensionsItem = getByText("Dimensions (cm)");
    const dimensionsValue = getByText(
      `${mockProps.height} x ${mockProps.width} x ${mockProps.length}`
    );
    expect(dimensionsItem).toBeInTheDocument();
    expect(dimensionsValue).toBeInTheDocument();
  });

  test("should render the product model code", () => {
    const { getByText } = render(<ProductSpecs {...mockProps} />);
    const modelCodeItem = getByText("Item model number");
    const modelCodeValue = getByText(mockProps.model_code);
    expect(modelCodeItem).toBeInTheDocument();
    expect(modelCodeValue).toBeInTheDocument();
  });

  test("should render the product colour", () => {
    const { getByText } = render(<ProductSpecs {...mockProps} />);
    const colourItem = getByText("Colour");
    const colourValue = getByText(mockProps.colour);
    expect(colourItem).toBeInTheDocument();
    expect(colourValue).toBeInTheDocument();
  });
});
