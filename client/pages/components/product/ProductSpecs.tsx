import { FC, memo } from "react";
import { Content } from "./Content";
import { ProductDetail } from "./ProductDetail";

export type ProductSpec =
  | {
      item: string;
      value: string;
    }
  | {
      item: string;
      value: number;
    };
interface ProductSpecsProps {
  brand: string;
  model_code: string;
  colour: string;
  weight: number;
  height: number;
  width: number;
  length: number;
}

export const ProductSpecs = memo(
  ({
    brand,
    weight,
    height,
    width,
    length,
    model_code,
    colour,
  }: ProductSpecsProps) => {
    const productSpecs: ProductSpec[] = [
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
      <ProductDetail>
        <Content heading="Specification">
          <dl>
            {productSpecs.map((spec) => (
              <DefinitionListEntry
                key={spec.item}
                item={spec.item}
                value={spec.value}
              />
            ))}
          </dl>
        </Content>
      </ProductDetail>
    );
  }
);

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
