import { useContext } from "react";
import ProductsContext from "../contexts/products-context";
import { IProduct } from "../utils/types-interfaces";
import { useLocation } from "react-router-dom";

const Product = () => {
  const context = useContext(ProductsContext);
  const location = useLocation();

  const productId = location.pathname.split("/").slice(-1)[0];
  const product: IProduct | undefined = context.products.find(
    (product) => product.id === productId
  );

  if (!product) {
    return (
      <div>
        <h1>No Product</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default Product;
