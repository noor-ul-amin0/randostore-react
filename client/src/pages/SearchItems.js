import { useHistory } from "react-router";
import queryString from "query-string";
// import { useDispatch } from "react-redux";
// import { addCartItem } from "../redux/features/cart/cartSlice";

const SearchItems = () => {
  const history = useHistory();
  // Get Query String from uri
  const { searchTerm } = queryString.parse(history.location.search);

  // Sort Items by Price
  const sortBy = (s) => {
    //   let sortedResult = [];
    //   switch (s) {
    //     case "price":
    //       sortedResult = filteredProducts.sort((a, b) => +a.price - +b.price);
    //       setFilteredProducts([...sortedResult]);
    //       return;
    //     case "-price":
    //       sortedResult = filteredProducts.sort((a, b) => +b.price - +a.price);
    //       setFilteredProducts([...sortedResult]);
    //       return;
    //     default:
    //       return setFilteredProducts([...filteredProducts]);
    //   }
  };
  return (
    <div className="container mt-5 mb-3">
      {![].length && (
        <p className="alert alert-warning">{`YOUR SEARCH '${searchTerm}' DID NOT MATCH TO ANY RESULT.`}</p>
      )}
      {[].length ? (
        <div className="dropdown" style={{ float: "right" }}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li style={{ cursor: "pointer" }} onClick={() => sortBy("price")}>
              Low to High Price
            </li>
            <li style={{ cursor: "pointer" }} onClick={() => sortBy("-price")}>
              High to Low Price
            </li>
          </ul>
        </div>
      ) : null}

      {[].map((product) => (
        <div
          key={product.id}
          className="card mb-3"
          style={{ maxWidth: "540px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                style={{ width: "150px", height: "150px" }}
                src={
                  product.img
                    ? `http://localhost:5000${product.img.replace(".", "")}`
                    : "http://localhost:5000/img/cookies.jpg"
                }
                alt={product.name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="card-text" style={{ color: "goldenrod" }}>
                  RS: {product.price}
                </h6>
                <button
                  type="button"
                  // onClick={() => dispatch(addCartItem(product))}
                  className="btn btn-success"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchItems;
