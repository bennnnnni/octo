import { FC } from "react";

interface BaseButtonPropsI
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customStyles?: string;
}

export const BaseButton: FC<BaseButtonPropsI> = ({
  children,
  customStyles = "",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${"bg-sohoLights text-[#000] rounded-lg cursor-pointer disabled:bg-plum disabled:text-[#fff] hover:bg-sohoLights/75 disabled:cursor-auto"} ${customStyles}`}
    >
      {children}
    </button>
  );
};
