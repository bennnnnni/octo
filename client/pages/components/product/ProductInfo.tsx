import { FC, memo } from "react";
import { Content } from "./Content";
import { ProductDetail } from "./ProductDetail";
import Image from "next/image";

interface ProductInfoProps {
  imgSrc: string;
  name: string;
  power: string;
  quantity: number;
}
export const ProductInfo: FC<ProductInfoProps> = memo(
  ({ imgSrc, name, power, quantity }) => (
    <ProductDetail>
      <Content customStyling="gap-2">
        <div className="min-w-fit [&>span]:rounded-2xl">
          <Image
            src={imgSrc}
            width={360}
            height={400}
            alt={`product picture of ${name}`}
          />
        </div>
        <h1 className="text-3xl">{name}</h1>
        <span className="text-purpleHaze self-start text-xs">{`${power} // Packet of ${quantity}`}</span>
      </Content>
    </ProductDetail>
  )
);
