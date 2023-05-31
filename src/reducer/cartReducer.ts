import { ICartItem, ReducerAction, ICart } from "../utils/types-interfaces";

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export const cartReducer = (state: ICart, action: ReducerAction): ICart => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD action");
      }
      const { id, quantity } = action.payload;
      const filteredCart: ICartItem[] = state.cart.filter(
        (item) => item.id !== id
      );
      const itemExists: ICartItem | undefined = state.cart.find(
        (item) => item.id === id
      );
      const qty: number = itemExists
        ? itemExists.quantity + quantity
        : quantity;

      return {
        ...state,
        cart: [...filteredCart, { ...action.payload, quantity: qty }],
      };
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE action");
      }
      const { id } = action.payload;
      const filteredCart: ICartItem[] = state.cart.filter(
        (item) => item.id !== id
      );

      return { ...state, cart: [...filteredCart] };
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("action.payload missing in QUANTITY action");
      }
      const { id, quantity, price } = action.payload;
      const itemExists: ICartItem | undefined = state.cart.find(
        (item) => item.id === id
      );
      if (!itemExists) {
        throw new Error("Item must exists in order to update quantity");
      }
      const updatedItem: ICartItem = {
        ...itemExists,
        quantity: quantity,
        price: price,
      };

      const filteredCart: ICartItem[] = state.cart.filter(
        (item) => item.id !== id
      );

      return { ...state, cart: [...filteredCart, updatedItem] };
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }
    default:
      throw new Error("Unidentified reducer action type");
  }
};
