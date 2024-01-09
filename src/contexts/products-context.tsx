import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { IProduct } from "../utils/types-interfaces";
import { milkBrands } from "../db/db";

type TProductsContext = {
  products: IProduct[];
  defaultImage: string;
};

const ProductsContext = createContext({} as TProductsContext);

export const ProductsContextProvider = (props: PropsWithChildren) => {
  const [state, _setState] = useState<TProductsContext>({
    products: milkBrands,
    defaultImage: "",
  });

  // useEffect(() => {
  //   const getProducts = async () => {
  //     await fetch("https://express-ts-milk-lovers.vercel.app/api/products")
  //       .then((data) => data.json())
  //       .then((results) => setState(results))
  //       .catch((err) => console.log(err));
  //   };

  //   getProducts();
  // }, []);

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        defaultImage: state.defaultImage,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
