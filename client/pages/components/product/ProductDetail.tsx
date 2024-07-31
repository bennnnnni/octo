import { FC } from "react";

interface ProductDetailPropsI extends React.HTMLAttributes<HTMLElement> {
  variant?: "dark" | "bright";
}

export const ProductDetail: FC<ProductDetailPropsI> = ({
  children,
  variant = "dark",
}) => {
  const brigthBackground = "bg-hemocyanin p-3 w-full flex justify-center";
  const darkBackground = "bg-siphon p-3 w-full flex justify-center";
  const styling = `${variant === "dark" ? darkBackground : brigthBackground}`;

  return <div className={styling}>{children}</div>;
};
