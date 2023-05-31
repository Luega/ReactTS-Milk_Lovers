import { useContext } from "react";
import ProductsContext from "../contexts/products-context";

type Props = {
  setFilter: (filterFromInput: string) => void;
};

const Filter = ({ setFilter }: Props) => {
  const { products } = useContext(ProductsContext);

  let productTypes: string[] = [];
  products.forEach((product) => {
    if (productTypes.includes(product.type)) {
      return;
    }
    return productTypes.push(product.type);
  });

  return (
    <>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">None</option>
        {productTypes.map((product, index) => {
          return (
            <option key={index} value={product}>
              {product}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Filter;
