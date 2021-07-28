import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { searchProducts } from "../redux/features/products/productSlice";
const Header = () => {
  const {cartItems} = useSelector(state=>state.cart)
  const dispatch=useDispatch()
  const history = useHistory();
  const [currentTab, setCurrentTab] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const tabs= [
    { id: 0, name: "Home", navigateTo: "/" },
    { id: 3, name: "Counter", navigateTo: "/counter" },
    { id: 1, name: "Sale-Item", navigateTo: "/sale-items" },
    { id: 2, name: "Checkout", navigateTo: "/checkout" },
  ]
  useEffect(() => {
    if (history.location.pathname === "/") setCurrentTab(0);
    else if (history.location.pathname === "/sale-items") setCurrentTab(1);
    else if (history.location.pathname === "/checkout") setCurrentTab(2);
    else setCurrentTab(0);
  }, [history.location.pathname]);
  const totalCartItems = () =>
    cartItems.length
      ? cartItems.reduce(
          (accumalatedQuantity, cart) => accumalatedQuantity + cart.quantity,
          0
        )
      : 0;

  return (
    <>
      <nav
        style={{ backgroundColor: "orange" }}
        className="navbar navbar-expand-lg navbar-dark"
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            onClick={() => setCurrentTab(0)}
          >
            RandoStore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className="nav-item"
                  onClick={() => setCurrentTab(tab.id)}
                >
                  <Link
                    className={
                      "nav-link " + (tab.id === currentTab ? "active" : "")
                    }
                    aria-current="page"
                    to={tab.navigateTo}
                  >
                    {tab.name}
                  </Link>
                </li>
              ))}
            </ul>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const value = searchTerm;
                setSearchTerm("");
                if (value) {
                  dispatch(searchProducts(value))
                  history.push(`/search-items?searchTerm=${value}`)};
              }}
              style={{ marginRight: "380px" }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Item"
                aria-label="Search"
                // required
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
            <div
              className="d-flex"
              style={{ position: "relative", right: "18px" }}
            >
              <i
                onClick={() => {
                  setCurrentTab(2);
                  history.push("/checkout");
                }}
                style={{
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
                className="fas fa-shopping-bag p-0"
              ></i>
              <span
                style={{
                  color: "black",
                  position: "absolute",
                  top: "-11px",
                  left: "15px",
                }}
                className="badge"
              >
                {totalCartItems()}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
