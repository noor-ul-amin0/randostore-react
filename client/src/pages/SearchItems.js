import { useHistory } from "react-router";
import queryString from "query-string";
import { useEffect, useState } from "react";

const SearchItems = ({ products, addToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const history = useHistory();
  // Get Query String from uri
  const { searchTerm } = queryString.parse(history.location.search);
  useEffect(() => {
    // filter out matched products
    let filtering = products.filter((product) =>
      searchTerm.length >= 3
        ? product.name
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        : product.name.toLocaleLowerCase() === searchTerm.toLocaleLowerCase()
    );
    console.log(filtering, searchTerm);
    setFilteredProducts(filtering);
  }, [products, searchTerm]);
  // Add Item to Cart (localStorage)
  const addItemToCart = (item) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let find = cartItems.find((cart) => cart.id === item.id);
    if (find) {
      cartItems = cartItems.map((cart) =>
        cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart
      );
    } else {
      cartItems = [...cartItems, { ...item, quantity: 1 }];
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    addToCart(cartItems);
  };
  // Sort Items by Price
  const sortBy = (s) => {
    let sortedResult = [];
    switch (s) {
      case "price":
        sortedResult = filteredProducts.sort((a, b) => +a.price - +b.price);
        setFilteredProducts([...sortedResult]);
        return;

      case "-price":
        sortedResult = filteredProducts.sort((a, b) => +b.price - +a.price);
        setFilteredProducts([...sortedResult]);
        return;

      default:
        return setFilteredProducts([...filteredProducts]);
    }
  };
  return (
    <div className="container mt-5 mb-3">
      {!filteredProducts.length && (
        <p className="alert alert-warning">{`YOUR SEARCH '${searchTerm}' DID NOT MATCH TO ANY RESULT.`}</p>
      )}
      {filteredProducts.length ? (
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

      {filteredProducts.map((product) => (
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
                  onClick={() => addItemToCart(product)}
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
