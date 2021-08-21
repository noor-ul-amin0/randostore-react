import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductIds } from "../redux/features/products/selectors";
import { fetchProducts } from "../redux/features/products/thunk";
import ProductListItem from "./ProductListItem";
const ProductList = () => {
  const dispatch = useDispatch();
  const productIds = useSelector(selectProductIds);
  const { loading } = useSelector((state) => state.product);

  const getProducts = useCallback(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    // getProducts();
    console.log("Productlist mounted.");
    dispatch(fetchProducts());
  }, []);

  const Loader = () => {
    if (loading)
      return (
        <div className="text-center">
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    else return null;
  };

  // JSX
  return (
    <>
      {Loader()}
      <div className="container mt-5 mb-3">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {productIds.map((id) => (
            <ProductListItem id={id} key={id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
