import { useContext } from "react";
import ProductsContext from "../contexts/products-context";
import { IProduct } from "../utils/types-interfaces";
import { Link, useLocation } from "react-router-dom";
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
    <main>
      <Link to="/store">Back</Link>
      <Card cartItem={null} product={product} />
      <RangeInput product={product} />
    </main>
  );
};

export default Product;
