import { useContext, useEffect, useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
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
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <input
          className="my-2"
          onChange={(e) => setQuantityInput(Number(e.target.value))}
          name="quantityInput"
          type="range"
          value={quantityInput}
          min="0"
          max="100"
        />
        <div className="flex justify-between">
          <label htmlFor="quantityInput">{quantityInput} liter</label>
          <CartButton
            action={{
              type: `${!cartProductExists ? "ADD" : "QUANTITY"}`,
              payload: {
                ...product,
                quantity: quantityInput,
                price: 25 * quantityInput,
              },
            }}
            text={<BsFillCartPlusFill />}
            className="my__button my__buttonBlue ms-2"
          />
        </div>
      </div>
    </div>
  );
};

export default RangeInput;
