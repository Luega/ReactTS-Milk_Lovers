import { ICartItem, IProduct } from "../utils/types-interfaces";

type Props = {
  product: IProduct | null;
  cartItem: ICartItem | null;
  className?: string;
  onClick?: () => void;
};

const Card = ({ product, cartItem, className, onClick }: Props) => {
  if (product) {
    return (
      <div className={className} onClick={onClick}>
        <div>Name: {product.name}</div>
        <div>Type: {product.type}</div>
        <div>Liter price: {product.literPrice}</div>
        <div>Storage: {product.storage}</div>
      </div>
    );
  }
  if (cartItem) {
    return (
      <div className={className}>
        <div>{cartItem.name}</div>
        <div>{cartItem.type}</div>
        <div>{cartItem.quantity}</div>
        <div>{cartItem.price}</div>
      </div>
    );
  }

  return <div>NO PRODUCT</div>;
};

export default Card;
