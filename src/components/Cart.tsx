import { useContext } from "react";
import ShoppingCartContext from "../contexts/shopping-cart-context";
import RangeInput from "./RangeInput";
import CartButton from "./CartButton";

const Cart = () => {
  const cart = useContext(ShoppingCartContext);
  return (
    <div className="p-8">
      {cart.totalQuantity} Litri
      {cart.totalPrice} Euro
      <div>
        {cart.cart.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.type}</div>
              <div>{item.quantity}</div>
              <div>{item.price}</div>
              <RangeInput product={item} />
              <CartButton
                action={{
                  type: "REMOVE",
                  payload: { ...item },
                }}
                text="remove"
              />
            </div>
          );
        })}
      </div>
      <CartButton
        action={{
          type: "SUBMIT",
        }}
        text="submit"
      />
    </div>
  );
};

export default Cart;
