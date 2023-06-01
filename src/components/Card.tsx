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
      <div className={`${className} pt-4 px-4`}>
        <img
          className="mx-auto mb-4 rounded"
          src="https://picsum.photos/200/200"
          alt=""
        />
        <div className="md:text-lg font-bold">{cartItem.name}</div>
        <div className="my__TextColorRegularDark text-lg md:text-2xl">
          {cartItem.type}
        </div>
        <div className="font-thin">
          <span>Storage: </span>
          <span className="my__TextColorRegularDark">{cartItem.quantity}</span>
        </div>
        <div className="mt-2">
          <span>Price: </span>
          <span className="my__TextColorRegularDark">{cartItem.price}</span>
        </div>
      </div>
    );
  }

  return <div>NO PRODUCT</div>;
};

export default Card;
