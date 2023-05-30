import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsContext from "../contexts/products-context";
import Filter from "../components/Filter";
import Search from "../components/Search";
import { IProduct } from "../utils/types-interfaces";
import Pagination from "../components/Pagination";

const Store = () => {
  const { products } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [filterInput, setFilterInput] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage, setCardsPerPage] = useState<number>(9);
  const navigate = useNavigate();

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = filteredProducts.slice(firstCardIndex, lastCardIndex);

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
      setCurrentPage(1);
      setFilteredProducts(
        products.filter((product) => product.type === filterInput)
      );
    }
    if (searchInput) {
      setCurrentPage(1);
      if (!filterInput) setFilteredProducts(products);
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
      {currentCards.map((product) => {
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
      <Pagination
        totalCards={filteredProducts.length}
        cardsPerPage={cardsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Store;
