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
  const [quantityInput, setQuantityInput] = useState<number>(1);

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
          className="my-2 cursor-pointer"
          onChange={(e) => setQuantityInput(Number(e.target.value))}
          name="quantityInput"
          type="range"
          value={quantityInput}
          min="1"
          max={product.storage}
        />
        <div className="w-full text-center">
          <label
            className="w-1/2 inline-block text-end"
            htmlFor="quantityInput"
          >
            <span className="my__TextColorRegularDark">{quantityInput}</span>
            <span> liter</span>
          </label>
          <div className="w-1/2 inline-block text-start">
            <CartButton
              action={{
                type: `${!cartProductExists ? "ADD" : "QUANTITY"}`,
                payload: {
                  ...product,
                  quantity: quantityInput,
                  price: product.literPrice * quantityInput,
                },
              }}
              text={<BsFillCartPlusFill />}
              className="my__button my__buttonBlue ms-2 align-middle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeInput;
