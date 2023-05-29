import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsContextProvider } from "../contexts/products-context";
import Layout from "./Layout";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Product from "../pages/Product";
import Contact from "../pages/Contact";

export const Router = () => {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/:id" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </ProductsContextProvider>
    </BrowserRouter>
  );
};

export default Router;
