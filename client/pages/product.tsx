import { useState } from "react";
import { useQuery } from "@apollo/client";
import { PRODUCT_BY_ID } from "../operations/product";
import Image from "next/image";
import CompanyLogo from "../public/octopus-logo.svg";
import { Basket } from "./components/product/Basket";
import { ProductInfo } from "./components/product/ProductInfo";
import { ProductActions } from "./components/product/ProductActions";
import { ProductSpecs } from "./components/product/ProductSpecs";
import { ProductDescription } from "./components/product/ProductDescription";

const FOOTER_TEXT_COMPANY = `Octopus Energy Ltd is a company registered in England and Wales.`;
const FOOTER_TEXT_REGISTRATION = `Registered number: 09263424. Registered office: UK House, 5th floor, 164-182 Oxford Street, London, W1D 1NN.`;
const PRODUCT_ID = "1";

export default function Product() {
  const { data, loading, error } = useQuery(PRODUCT_BY_ID, {
    variables: { id: PRODUCT_ID },
  });
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [basketContent, setBasketContent] = useState<string[]>([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const {
    brand,
    colour,
    description,
    height,
    id,
    img_url,
    length,
    model_code,
    name,
    power,
    price,
    quantity,
    weight,
    width,
  } = data.Product;

  const handleAddToCartClick = () => {
    setBasketContent((prevState) => {
      return [...prevState, ...new Array(selectedQuantity).fill(id)];
    });
    setSelectedQuantity(1);
  };

  const handleDecrease = () => {
    setSelectedQuantity((prevState) => prevState - 1);
  };
  const handleIncrease = () => {
    setSelectedQuantity((prevState) => prevState + 1);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <header className="flex flex-row items-center justify-between px-4 py-2 min-w-full">
        <Image
          src={CompanyLogo}
          width={176}
          height={32}
          alt="octopus energy company logo"
        />
        <Basket itemCount={basketContent.length} />
      </header>

      <main className="min-w-full">
        <ProductInfo
          imgSrc={img_url}
          name={name}
          power={power}
          quantity={quantity}
        />

        <ProductActions
          price={price}
          selectedQuantity={selectedQuantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onAdd={handleAddToCartClick}
        />

        <ProductDescription description={description} />

        <ProductSpecs
          brand={brand}
          model_code={model_code}
          colour={colour}
          weight={weight}
          height={height}
          width={width}
          length={length}
        />
      </main>

      <footer className="text-purpleHaze text-[8px] p-4 bg-hemocyanin flex flex-col items-center mt-auto min-w-full">
        <p>{FOOTER_TEXT_COMPANY}</p>
        <p>{FOOTER_TEXT_REGISTRATION}</p>
      </footer>
    </div>
  );
}
