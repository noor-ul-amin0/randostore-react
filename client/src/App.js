import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AddProduct from "./pages/AddProduct";
import CheckoutPage from "./pages/Checkout";
import SearchItems from "./pages/SearchItems";
import "./App.css";

const App = () => {
  // States
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  // API calls
  useEffect(() => {
    fetchProducts()
      .then(({ data }) => setProducts(data))
      .catch((error) => alert(error.message));
  }, []);
  const fetchProducts = async () =>
    await axios.get("http://localhost:5000/items");

  // Utility functions
  const addProduct = (product) => setProducts([...products, product]);
  const updateCartItems = (crtItems) => setCartItems(crtItems);

  // JSX
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Header cartItems={cartItems} />
          <Switch>
            <Route exact path="/">
              <HomePage products={products} addToCart={updateCartItems} />
            </Route>
            <Route path="/sale-items">
              <AddProduct addProduct={addProduct} />
            </Route>
            <Route path="/checkout">
              <CheckoutPage
                cartItems={cartItems}
                updateCartItems={updateCartItems}
              />
            </Route>
            <Route path="/search-items">
              <SearchItems products={products} addToCart={updateCartItems} />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
