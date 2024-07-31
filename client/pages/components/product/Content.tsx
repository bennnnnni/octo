import { FC } from "react";

interface ContentPropsI extends React.HTMLAttributes<HTMLElement> {
  heading?: string;
  customStyling?: string;
}

export const Content: FC<ContentPropsI> = ({
  children,
  heading,
  customStyling = "",
}) => {
  return (
    <section className={`max-w-[22.5rem] grow flex flex-col ${customStyling}`}>
      {heading ? <h2 className="pb-4 text-2xl">{heading}</h2> : null}
      {children}
    </section>
  );
};
