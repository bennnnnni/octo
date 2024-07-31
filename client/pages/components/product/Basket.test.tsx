import { render } from "@testing-library/react";
import { Basket } from "./Basket";
import BasketLogo from "../../../public/basket.svg";

describe("component: basket", () => {
  test("should display item count when itemCount is greater than 0", () => {
    const { getByTitle } = render(<Basket itemCount={5} />);
    const basketItems = getByTitle("Basket items");
    expect(basketItems).toHaveTextContent("5");
  });

  test("should display '+9' when itemCount is greater than 9", () => {
    const { getByTitle } = render(<Basket itemCount={10} />);
    const basketItems = getByTitle("Basket items");
    expect(basketItems).toHaveTextContent("+9");
  });

  test("should not display item count when itemCount is 0", () => {
    const { queryByTitle } = render(<Basket itemCount={0} />);
    const basketItems = queryByTitle("Basket items");
    expect(basketItems).not.toBeInTheDocument();
  });

  test("should render the basket logo", () => {
    const { getByAltText } = render(<Basket itemCount={0} />);
    const basketLogo = getByAltText("shopping basket icon");
    expect(basketLogo).toBeInTheDocument();
  });
});
