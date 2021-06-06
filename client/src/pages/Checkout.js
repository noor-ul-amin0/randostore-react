import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";
import "./Checkout.css";
const CheckoutPage = ({ cartItems, updateCartItems }) => {
  return (
    <>
      <center className="p-3">
        <p style={{ fontWeight: "700", fontSize: "x-large" }}>SHOPPING CART</p>
      </center>
      {!cartItems.length ? (
        <div className="container cart-empty">
          <p className="alert alert-info">Your Shopping cart is empty</p>
          <Link to="/">
            <button className="btn1">
              <i className="fa fa-long-arrow-left"></i>
              Return to Shop
            </button>
          </Link>
        </div>
      ) : (
        <CartItems cartItems={cartItems} updateCartItems={updateCartItems} />
      )}
    </>
  );
};

export default CheckoutPage;
