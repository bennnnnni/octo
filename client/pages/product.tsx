import { useQuery } from "@apollo/client";
import { PRODUCT_BY_ID } from "../operations/product";

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
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const product = data.Product;
  return (
    <div>
      <div>{`Client side rendering`}</div>
      <div>{product.id}</div>
    </div>
  );
}
