import { render, fireEvent } from "@testing-library/react";
import Product from "../pages/product";
import { MockedProvider } from "@apollo/client/testing";
import { PRODUCT_BY_ID } from "../operations/product";

const mocks = [
  {
    request: {
      query: PRODUCT_BY_ID,
      variables: {
        id: "1",
      },
    },
    result: {
      data: {
        Product: {
          id: "1",
          name: "Energy saving light bulb",
          power: "25W",
          description:
            "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
          price: 1299,
          quantity: 4,
          brand: "Philips",
          weight: 77,
          height: 12.6,
          width: 6.2,
          length: 6.2,
          model_code: "E27 ES",
          colour: "Cool daylight",
          img_url: "https://i.ibb.co/2nzwxnQ/bulb.png",
        },
      },
    },
  },
];

test("should be able to increase and decrease product quantity", async () => {
  const { findByTitle, findByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Product />
    </MockedProvider>
  );
  expect(await findByText("Loading...")).toBeInTheDocument();

  const increaseQuantity = await findByText("+");

  const currentQuantity = await findByTitle("Current quantity");
  expect(currentQuantity).toHaveTextContent("1");

  fireEvent.click(increaseQuantity);
  expect(currentQuantity).toHaveTextContent("2");

  const decreaseQuantity = await findByText("-");

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
  const { findByText, findByTitle } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Product />
    </MockedProvider>
  );

  const increaseQuantity = await findByText("+");

  const currentQuantity = await findByTitle("Current quantity");

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent("4");

  const addToBasketElement = await findByText("Add to cart");
  fireEvent.click(addToBasketElement);

  const basketItems = await findByTitle("Basket items");
  expect(basketItems).toHaveTextContent("4");
});
