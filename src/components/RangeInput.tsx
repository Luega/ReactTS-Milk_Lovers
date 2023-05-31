import { useContext, useEffect, useState } from "react";
import { ICartItem, IProduct } from "../utils/types-interfaces";
import ShoppingCartContext from "../contexts/shopping-cart-context";
import CartButton from "./CartButton";

type Props = {
  product: IProduct;
};

const RangeInput = ({ product }: Props) => {
  const { cart } = useContext(ShoppingCartContext);
  const [quantityInput, setQuantityInput] = useState<number>(0);

  const cartProductExists: ICartItem | undefined = cart.find(
    (item) => item.id === product.id
  );

  useEffect(() => {
    cartProductExists && setQuantityInput(cartProductExists.quantity);
  }, [cartProductExists]);

  return (
    <>
      <label htmlFor="quantityInput">{quantityInput}</label>
      <input
        onChange={(e) => setQuantityInput(Number(e.target.value))}
        name="quantityInput"
        type="range"
        value={quantityInput}
        min="0"
        max="100"
      />
      <CartButton
        action={{
          type: `${!cartProductExists ? "ADD" : "QUANTITY"}`,
          payload: {
            ...product,
            quantity: quantityInput,
            price: 25 * quantityInput,
          },
        }}
        text="Add"
      />
    </>
  );
};

export default RangeInput;
