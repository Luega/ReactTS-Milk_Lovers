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
      <div className="pt-10 flex flex-col items-center">
        <div className="productPage__product px-4 py-8 rounded shadow-xl">
          <div className="flex justify-center">
            <Card cartItem={null} product={product} />
          </div>
          <div className="mt-6">
            <RangeInput product={product} />
          </div>
        </div>
        <Link className="my__button my__buttonRed my-10" to="/store">
          To the store
        </Link>
      </div>
    </main>
  );
};

export default Product;
