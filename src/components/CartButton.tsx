import { useContext } from "react";
import ShoppingCartContext from "../contexts/shopping-cart-context";
import { ReducerAction } from "../utils/types-interfaces";

type Props = {
  action: ReducerAction;
  text: any;
  className?: string;
};

const CartButton = ({ action, text, className }: Props) => {
  const { dispatch } = useContext(ShoppingCartContext);

  return (
    <button className={className} onClick={() => dispatch(action)}>
      {text}
    </button>
  );
};

export default CartButton;
