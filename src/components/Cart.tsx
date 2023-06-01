import { useContext, useState } from "react";
import { BsFillCartFill, BsFillCartXFill } from "react-icons/bs";
import ShoppingCartContext from "../contexts/shopping-cart-context";
import RangeInput from "./RangeInput";
import CartButton from "./CartButton";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useContext(ShoppingCartContext);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };

  const outBoardingHandler = () => {
    console.log("ciao");

    setDropdown(!dropdown);
    navigate(`/thanks`);
  };

  return (
    <>
      <button
        className="my__button my__buttonRed z-50 fixed top-6 right-8 lg:right-20"
        onClick={dropdownHandler}
      >
        <BsFillCartFill className="text-2xl" />
      </button>
      <div
        className={`cart__overlay ${
          dropdown ? "block" : "hidden"
        } z-40 min-h-screen w-full fixed top-0 right-0 flex justify-center items-center`}
      >
        <div className="cart__container w-4/5 p-10 rounded overflow-scroll">
          <div className="cart__details text-center text-xl font-bolder">
            <div className="mb-2">
              <span>Milk: </span>
              <span className="my__TextColorRegularDark">
                {cart.totalQuantity} liter
              </span>
            </div>
            <div>
              <span>To pay: </span>
              <span className="my__TextColorRegularDark">
                {cart.totalPrice} SEK
              </span>
            </div>
          </div>
          {cart.totalQuantity === 0 ? (
            <div className="mt-20 flex flex-col items-center">
              <span className="my__TextAlertColor mb-5 text-3xl font-bold">
                No Milks
              </span>
              <img
                className="rounded"
                src="https://picsum.photos/200/200"
                alt=""
              />
            </div>
          ) : (
            <>
              <ul className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cart.cart.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="cart__item w-full h-full m-auto p-2 flex flex-col items-center rounded shadow-xl"
                    >
                      <Card cartItem={item} product={null} />
                      <RangeInput product={item} />
                      <CartButton
                        action={{
                          type: "REMOVE",
                          payload: { ...item },
                        }}
                        text={<BsFillCartXFill />}
                        className="my__button my__buttonRed self-start mt-auto"
                      />
                    </li>
                  );
                })}
              </ul>
              <div onClick={() => outBoardingHandler()}>
                <CartButton
                  action={{
                    type: "SUBMIT",
                  }}
                  text="Pay"
                  className="my__button my__buttonBlue"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
