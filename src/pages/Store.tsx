import { useContext } from "react";
import ProductsContext from "../contexts/products-context";

const Store = () => {
  const context = useContext(ProductsContext);

  return (
    <div className="store">
      {context.products.map((product) => {
        return <div key={product.id}>{product.name}</div>;
      })}
    </div>
  );
};

export default Store;
