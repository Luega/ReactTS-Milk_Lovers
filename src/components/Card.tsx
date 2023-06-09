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
      <div className={`${className} p-6 pb-2`} onClick={onClick}>
        <img
          className="w-60 mx-auto mb-4 rounded"
          src="https://images.pexels.com/photos/799273/pexels-photo-799273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt={product.name}
        />
        <div className="md:text-lg font-bold">{product.name}</div>
        <div className="my__TextColorRegularDark text-lg md:text-2xl">
          {product.type}
        </div>
        <div className="font-thin">
          <span>Storage: </span>
          <span className="my__TextColorRegularDark">{product.storage}</span>
          <span> liter</span>
        </div>
        <div className="mt-2 text-end">
          <span>Price: </span>
          <span className="my__TextColorRegularDark">{product.literPrice}</span>
          <span> SEK</span>
        </div>
      </div>
    );
  }
  if (cartItem) {
    return (
      <div className={`${className} pt-4 px-4`}>
        <img
          className="w-60 mx-auto mb-4 rounded"
          src="https://images.pexels.com/photos/799273/pexels-photo-799273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt={cartItem.name}
        />
        <div className="md:text-lg font-bold">{cartItem.name}</div>
        <div className="my__TextColorRegularDark text-lg md:text-2xl">
          {cartItem.type}
        </div>
        <div className="font-thin">
          <span>Liter: </span>
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
