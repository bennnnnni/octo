import { BaseButton } from "./BaseButton";
import { Content } from "./Content";
import { ProductDetail } from "./ProductDetail";

export const ProductActions = ({
  price,
  selectedQuantity,
  onIncrease,
  onDecrease,
  onAdd,
}: {
  price: number;
  selectedQuantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onAdd: () => void;
}) => {
  return (
    <ProductDetail>
      <Content customStyling="gap-2">
        <div className="flex justify-between items-end min-w-full">
          <span className="text-xl">{`£${(price / 100).toFixed(2)}`}</span>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[8px]">Qty</span>
            <div className="flex gap-1 items-center">
              <BaseButton
                customStyles=" h-7 w-7 text-sm"
                disabled={selectedQuantity === 1}
                onClick={onDecrease}
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
                onClick={onIncrease}
              >
                {"+"}
              </BaseButton>
            </div>
          </div>
        </div>
        <BaseButton customStyles=" min-w-full p-4 text-sm" onClick={onAdd}>
          Add to cart
        </BaseButton>
      </Content>
    </ProductDetail>
  );
};
