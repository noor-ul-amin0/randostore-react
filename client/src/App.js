import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AddProduct from "./pages/AddProduct";
import CheckoutPage from "./pages/Checkout";
import SearchItems from "./pages/SearchItems";
import { Counter } from "./components/Counter";
import "./App.css";
const App = () => {

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage  />
            </Route>
            <Route path="/sale-items">
              <AddProduct />
            </Route>
            <Route path="/checkout">
              <CheckoutPage
              />
            </Route>
            <Route path="/search-items">
              <SearchItems />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
