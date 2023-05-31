import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsContextProvider } from "../contexts/products-context";
import { ShoppingCartContextProvider } from "../contexts/shopping-cart-context";
import Layout from "./Layout";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Product from "../pages/Product";
import Contact from "../pages/Contact";

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
            </Route>
          </Routes>
        </ShoppingCartContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  );
};

export default Router;
