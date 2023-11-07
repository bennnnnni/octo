import { FC, useState } from "react";
import { useQuery } from "@apollo/client";
import { PRODUCT_BY_ID } from "../operations/product";
import Image from "next/image";
import CompanyLogo from "../public/octopus-logo.svg";
import { BaseButton } from "./components/product/BaseButton";
import { Basket } from "./components/product/Basket";

const FOOTER_TEXT_COMPANY = `Octopus Energy Ltd is a company registered in England and Wales.`;
const FOOTER_TEXT_REGISTRATION = `Registered number: 09263424. Registered office: UK House, 5th floor, 164-182 Oxford Street, London, W1D 1NN.`;
const PRODUCT_ID = "1";

interface DetailSectionPropsI extends React.HTMLAttributes<HTMLElement> {
  variant?: "dark" | "bright";
}

const DetailSection: FC<DetailSectionPropsI> = ({
  children,
  variant = "dark",
}) => {
  const brigthBackground = "bg-hemocyanin p-3 w-full flex justify-center";
  const darkBackground = "bg-siphon p-3 w-full flex justify-center";
  const styling = `${variant === "dark" ? darkBackground : brigthBackground}`;

  return <div className={styling}>{children}</div>;
};

interface ContentSectionPropsI extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  customStyling?: string;
}

const ContentSection: FC<ContentSectionPropsI> = ({
  children,
  title,
  customStyling = "",
}) => {
  return (
    <section className={`max-w-[22.5rem] grow flex flex-col ${customStyling}`}>
      {title ? <h2 className="pb-4 text-2xl">{title}</h2> : null}
      {children}
    </section>
  );
};

interface ListEntryI {
  item: string;
  value: string | number;
}

const DefinitionListEntry: FC<ListEntryI> = ({ item, value }) => (
  <>
    <dt className="float-left w-1/2 py-2 text-xs font-light tracking-wide">
      {item}
    </dt>
    <dd className="float-left w-1/2 py-2 text-xs font-light tracking-wide">
      {value}
    </dd>
  </>
);

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
  };

  const productSpecs = [
    {
      item: `Brand`,
      value: brand,
    },
    {
      item: `Item weight (g)`,
      value: weight,
    },
    {
      item: `Dimensions (cm)`,
      value: `${height} x ${width} x ${length}`,
    },
    {
      item: `Item model number`,
      value: model_code,
    },
    {
      item: `Colour`,
      value: colour,
    },
  ];

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
        <DetailSection>
          <ContentSection customStyling="gap-2">
            <div className="min-w-fit [&>span]:rounded-2xl">
              <Image
                src={img_url}
                width={360}
                height={400}
                alt={`product picture of ${name}`}
              />
            </div>
            <h1 className="text-3xl">{name}</h1>
            <span className="text-purpleHaze self-start text-xs">{`${power} // Packet of ${quantity}`}</span>
          </ContentSection>
        </DetailSection>

        <DetailSection>
          <ContentSection customStyling="gap-2">
            <div className="flex justify-between items-end min-w-full">
              <span className="text-xl">{`£${(price / 100).toFixed(2)}`}</span>
              <div className="flex flex-col items-center gap-1">
                <span className="text-[8px]">Qty</span>
                <div className="flex gap-1 items-center">
                  <BaseButton
                    customStyles=" h-7 w-7 text-sm"
                    disabled={selectedQuantity === 1}
                    onClick={() =>
                      setSelectedQuantity((prevState) => prevState - 1)
                    }
                  >
                    {"-"}
                  </BaseButton>
                  <div
                    title="Current quantity"
                    className="min-w-[12px] text-xl px-1"
                  >
                    {selectedQuantity}
                  </div>
                  <BaseButton
                    customStyles=" h-7 w-7 text-sm"
                    disabled={selectedQuantity === 50}
                    onClick={() =>
                      setSelectedQuantity((prevState) => prevState + 1)
                    }
                  >
                    {"+"}
                  </BaseButton>
                </div>
              </div>
            </div>
            <BaseButton
              customStyles=" min-w-full p-4 text-sm"
              onClick={handleAddToCartClick}
            >
              Add to cart
            </BaseButton>
          </ContentSection>
        </DetailSection>

        <DetailSection variant="bright">
          <ContentSection title="Description">
            <p className="text-sm font-light tracking-wide">{description}</p>
          </ContentSection>
        </DetailSection>

      </main>

      <footer className="text-purpleHaze text-[8px] p-4 bg-hemocyanin flex flex-col items-center mt-auto min-w-full">
        <p>{FOOTER_TEXT_COMPANY}</p>
        <p>{FOOTER_TEXT_REGISTRATION}</p>
      </footer>
    </div>
  );
}
