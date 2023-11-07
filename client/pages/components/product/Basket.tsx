import BasketLogo from "../../../public/basket.svg";
import Image from "next/image";

export const Basket = ({ itemCount }: { itemCount: number }) => {
  return (
    <div className="flex gap-1 items-center justify-center">
      {itemCount > 0 ? (
        <span
          title="Basket items"
          className="px-2 py-1 text-[8px] font-bold bg-sohoLights rounded-lg"
        >
          {itemCount > 9 ? "+9" : itemCount}
        </span>
      ) : null}
      <Image
        src={BasketLogo}
        width={24}
        height={24}
        alt="shopping basket icon"
      />
    </div>
  );
};
