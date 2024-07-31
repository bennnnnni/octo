import { memo } from "react";
import { Content } from "./Content";
import { ProductDetail } from "./ProductDetail";

export const ProductDescription = memo(
  ({ description }: { description: string }) => (
    <ProductDetail variant="bright">
      <Content heading="Description">
        <p className="text-sm font-light tracking-wide">{description}</p>
      </Content>
    </ProductDetail>
  )
);
