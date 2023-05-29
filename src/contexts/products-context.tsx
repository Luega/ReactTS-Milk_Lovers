import React, { PropsWithChildren, useEffect, useState } from "react";
import { Product } from "../utils/types-interfaces";

type TProductsContext = {
  products: Product[];
  defaultImage: string;
};

const ProductsContext = React.createContext<TProductsContext>({
  products: [],
  defaultImage: "",
});

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
