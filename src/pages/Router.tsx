import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsContextProvider } from "../contexts/products-context";
import { ShoppingCartContextProvider } from "../contexts/shopping-cart-context";
import Layout from "../layout/Layout";
import Home from "./Home";
import Store from "./Store";
import Product from "./Product";
import Contact from "./Contact";
import Thanks from "./Thanks";

export const Router = () => {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <ShoppingCartContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/store/:id" element={<Product />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thanks" element={<Thanks />} />
            </Route>
          </Routes>
        </ShoppingCartContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  );
};

export default Router;
