import { Outlet } from "react-router-dom";
import Header from "./Header";
import Cart from "../components/Cart";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Cart />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
