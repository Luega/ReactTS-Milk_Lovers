import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsContext from "../contexts/products-context";
import Filter from "../components/Filter";
import Search from "../components/Search";
import { IProduct } from "../utils/types-interfaces";
import Pagination from "../components/Pagination";

const Store = () => {
  const { products } = useContext(ProductsContext);
  const [state, setState] = useState({
    filteredProducts: products,
    filterInput: "",
    searchInput: "",
    currentPage: 1,
    cardsPerPage: 9,
  });
  const navigate = useNavigate();

  const lastCardIndex = state.currentPage * state.cardsPerPage;
  const firstCardIndex = lastCardIndex - state.cardsPerPage;
  const currentCards = state.filteredProducts.slice(
    firstCardIndex,
    lastCardIndex
  );

  const redirectHandler = (productId: string) => {
    return navigate(`/store/${productId}`);
  };

  const filterHandler = (filterFromInput: string) => {
    setState((prevState) => {
      return { ...prevState, filterInput: filterFromInput };
    });
  };
  const searchHandler = (searchFromInput: string) => {
    setState((prevState) => {
      return { ...prevState, searchInput: searchFromInput };
    });
  };
  const changePageHandler = (pageFromInput: number) => {
    setState((prevState) => {
      return { ...prevState, currentPage: pageFromInput };
    });
  };

  useEffect(() => {
    if (!state.filterInput && !state.searchInput) {
      setState((prevState) => {
        return { ...prevState, filteredProducts: products };
      });
    }
    if (state.filterInput) {
      setState((prevState) => {
        return { ...prevState, currentPage: 1 };
      });
      setState((prevState) => {
        return {
          ...prevState,
          filteredProducts: products.filter(
            (product) => product.type === state.filterInput
          ),
        };
      });
    }
    if (state.searchInput) {
      setState((prevState) => {
        return { ...prevState, currentPage: 1 };
      });
      if (!state.filterInput) {
        setState((prevState) => {
          return { ...prevState, filteredProducts: products };
        });
      }
      setState((prevState) => {
        return {
          ...prevState,
          filteredProducts: prevState.filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(state.searchInput)
          ),
        };
      });
    }
  }, [state.filterInput, state.searchInput, products]);

  return (
    <div className="store">
      <Filter setFilter={filterHandler} />
      <Search filter={state.searchInput} setFilter={searchHandler} />
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
        totalCards={state.filteredProducts.length}
        cardsPerPage={state.cardsPerPage}
        setCurrentPage={changePageHandler}
      />
    </div>
  );
};

export default Store;
