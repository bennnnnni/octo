import { useQuery } from "@apollo/client";
import { PRODUCT_BY_ID } from "../operations/product";

const PRODUCT_ID = "1";

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
