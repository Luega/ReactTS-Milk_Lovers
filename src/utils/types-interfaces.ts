export interface IProduct {
  id: string;
  name: string;
  type: string;
  storage: number;
}

export interface ICartItem extends IProduct {
  price: number;
  quantity: number;
}

export interface ICart {
  cart: ICartItem[];
}

export interface ICartContext extends ICart {
  totalQuantity: number;
  totalPrice: number;
  dispatch: (action: ReducerAction) => void;
}

export type ReducerAction = {
  type: string;
  payload?: ICartItem;
};
