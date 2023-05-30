import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsContext from "../contexts/products-context";
import Filter from "../components/Filter";
import Search from "../components/Search";
import { IProduct } from "../utils/types-interfaces";

const Store = () => {
  const { products } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [filterInput, setFilterInput] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const navigate = useNavigate();

  const redirectHandler = (productId: string) => {
    return navigate(`/store/${productId}`);
  };

  const filterHandler = (filterFromInput: string) => {
    setFilterInput(filterFromInput);
  };

  useEffect(() => {
    if (!filterInput && !searchInput) {
      setFilteredProducts(products);
    }
    if (filterInput) {
      setFilteredProducts(
        products.filter((product) => product.type === filterInput)
      );
    }
    if (searchInput) {
      setFilteredProducts((prevState) =>
        prevState.filter((product) =>
          product.name.toLowerCase().includes(searchInput)
        )
      );
    }
  }, [filterInput, searchInput, products]);

  return (
    <div className="store">
      <Filter setFilter={filterHandler} />
      <Search filter={searchInput} setFilter={setSearchInput} />
      {filteredProducts.map((product) => {
        return (
          <div
            className="p-5 cursor-pointer"
            key={product.id}
            onClick={() => redirectHandler(product.id)}
          >
            {product.name}
          </div>
        );
      })}
    </div>
  );
};

export default Store;
