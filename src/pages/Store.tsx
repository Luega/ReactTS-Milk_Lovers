import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsContext from "../contexts/products-context";
import Filter from "../components/Filter";
import { IProduct } from "../utils/types-interfaces";

const Store = () => {
  const { products } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState<string>("");
  const navigate = useNavigate();

  const redirectHandler = (productId: string) => {
    return navigate(`/store/${productId}`);
  };

  const filterHandler = (filterFromInput: string) => {
    setFilter(filterFromInput);
  };

  useEffect(() => {
    if (!filter) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.type === filter)
      );
    }
  }, [filter, products]);

  return (
    <div className="store">
      <Filter setFilter={filterHandler} />
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
