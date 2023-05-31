import { PropsWithChildren, createContext, useReducer } from "react";
import { ICartContext } from "../utils/types-interfaces";
import { cartReducer } from "../reducer/cartReducer";

const ShoppingCartContext = createContext({} as ICartContext);

export const ShoppingCartContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  const totalQuantity = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.quantity;
  }, 0);

  const totalPrice = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.price;
  }, 0);

  return (
    <ShoppingCartContext.Provider
      value={{
        cart: state.cart,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice,
        dispatch: dispatch,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
