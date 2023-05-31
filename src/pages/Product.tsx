import { useContext } from "react";
import ProductsContext from "../contexts/products-context";
import { IProduct } from "../utils/types-interfaces";
import { useLocation } from "react-router-dom";
import RangeInput from "../components/RangeInput";
import Card from "../components/Card";

const Product = () => {
  const { products } = useContext(ProductsContext);
  const location = useLocation();

  const productId = location.pathname.split("/").slice(-1)[0];
  const product: IProduct | undefined = products.find(
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
      <Card cartItem={null} product={product} />
      <RangeInput product={product} />
    </div>
  );
};

export default Product;
