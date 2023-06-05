import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsContext from "../contexts/products-context";
import Filter from "../components/Filter";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import Card from "../components/Card";
import { IProduct } from "../utils/types-interfaces";

const Store = () => {
  const { products } = useContext(ProductsContext);
  const [state, setState] = useState({
    filteredProducts: products,
    filterInput: "",
    searchInput: "",
    currentPage: 1,
    cardsPerPage: 9,
    currentCards: [] as IProduct[],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const lastCardIndex = state.currentPage * state.cardsPerPage;
    const firstCardIndex = lastCardIndex - state.cardsPerPage;
    setState((prevState) => {
      return {
        ...prevState,
        currentCards: prevState.filteredProducts.slice(
          firstCardIndex,
          lastCardIndex
        ),
      };
    });
  }, [state.currentPage, state.cardsPerPage, state.filteredProducts]);

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
    <main>
      <section className="store py-10 flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Filter setFilter={filterHandler} />
          <Search filter={state.searchInput} setFilter={searchHandler} />
        </div>
        {state.filteredProducts.length !== 0 && (
          <ul className="px-4 py-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {state.currentCards.map((product) => {
              return (
                <li
                  key={product.id}
                  className="storePage__product w-full h-full shadow-xl rounded "
                >
                  <Card
                    className="cursor-pointer"
                    product={product}
                    cartItem={null}
                    onClick={() => redirectHandler(product.id)}
                  />
                </li>
              );
            })}
          </ul>
        )}
        {state.filteredProducts.length === 0 && (
          <div className="mt-20 flex flex-col items-center">
            <span className="my__TextAlertColor mb-5 text-3xl font-bold">
              No Milks
            </span>
            <img
              className="w-80 rounded-xl"
              src="https://images.pexels.com/photos/1438489/pexels-photo-1438489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Hands with milk"
            />
          </div>
        )}
        {!products && (
          <div className="w-full min-h-screen">
            <ul className="w-3/4 h-screen m-auto p-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-row-1 md:grid-row-2 lg:grid-row-3">
              <li className="my__isLoading__card w-full h-full m-auto border rounded-lg shadow-lg"></li>
              <li className="my__isLoading__card w-full h-full m-auto border rounded-lg shadow-lg"></li>
              <li className="my__isLoading__card w-full h-full m-auto border rounded-lg shadow-lg"></li>
              <li className="my__isLoading__card w-full h-full m-auto border rounded-lg shadow-lg"></li>
              <li className="my__isLoading__card w-full h-full m-auto border rounded-lg shadow-lg"></li>
              <li className="my__isLoading__card w-full h-full m-auto border rounded-lg shadow-lg"></li>
            </ul>
          </div>
        )}
        <Pagination
          totalCards={state.filteredProducts.length}
          cardsPerPage={state.cardsPerPage}
          setCurrentPage={changePageHandler}
        />
      </section>
    </main>
  );
};

export default Store;
