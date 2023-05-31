import { useContext } from "react";
import ProductsContext from "../contexts/products-context";
import { IProduct } from "../utils/types-interfaces";
import { useLocation } from "react-router-dom";
import ShoppingCartContext from "../contexts/shopping-cart-context";

const Product = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(ShoppingCartContext);
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
      <h1>{product.name}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: { ...product, quantity: 5, price: 25 * 5 },
          })
        }
      >
        Add
      </button>
    </div>
  );
};

export default Product;
