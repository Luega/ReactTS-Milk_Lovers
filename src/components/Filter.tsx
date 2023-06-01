import { useContext } from "react";
import { ImFilter } from "react-icons/im";
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
    <div>
      <ImFilter className="mr-2 inline text-2xl" />
      <select
        className="px-2 py-1 rounded border shadow"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All Type</option>
        {productTypes.map((product, index) => {
          return (
            <option key={index} value={product}>
              {product}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
