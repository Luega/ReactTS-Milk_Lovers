import { PropsWithChildren, createContext } from "react";
import { IProduct } from "../utils/types-interfaces";
import { milkBrands } from "../db/db";

type TProductsContext = {
  products: IProduct[];
  defaultImage: string;
};

const ProductsContext = createContext({} as TProductsContext);

export const ProductsContextProvider = (props: PropsWithChildren) => {

  return (
    <ProductsContext.Provider
      value={{
        products: milkBrands,
        defaultImage: "",
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
