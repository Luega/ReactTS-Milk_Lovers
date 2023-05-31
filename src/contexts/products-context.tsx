import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { IProduct } from "../utils/types-interfaces";

type TProductsContext = {
  products: IProduct[];
  defaultImage: string;
};

const ProductsContext = createContext({} as TProductsContext);

export const ProductsContextProvider = (props: PropsWithChildren) => {
  const [state, setState] = useState<TProductsContext>({
    products: [],
    defaultImage: "",
  });

  useEffect(() => {
    const getProducts = async () => {
      await fetch("http://localhost:8000/api/products")
        .then((data) => data.json())
        .then((results) => setState(results))
        .catch((err) => console.log(err));
    };

    getProducts();
  }, []);

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
