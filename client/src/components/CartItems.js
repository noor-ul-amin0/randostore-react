import { useDispatch } from "react-redux";
import { updateCartItem  , removeCartItem } from "../redux/features/cart/cartSlice";

const CartItems = ({cartItems}) => {
  const dispatch=useDispatch();

  return (
    <div className="container">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Delete</th>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price(unit)</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price(unit x quantity)</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem, i) => (
            <tr key={i}>
              <td className="product_remove">
                <i
                  onClick={() => dispatch(removeCartItem(cartItem.id))}
                  className="fa fa-trash-o"
                  style={{ cursor: "pointer" }}
                ></i>
              </td>
              <th scope="row">{i + 1}</th>
              <td>{cartItem.name}</td>
              <td>
                <img
                  src={
                    cartItem.img
                      ? `http://localhost:5000${cartItem.img.replace(".", "")}`
                      : "http://localhost:5000/img/cookies.jpg"
                  }
                  alt={cartItem.name}
                />
              </td>
              <td>{cartItem.price}</td>
              <td>
                <i
                  style={{ pointerEvents: cartItem.quantity === 1 && "none" }}
                  onClick={() => dispatch(updateCartItem({itemId:cartItem.id,qty:-1}))}
                  className="fa fa-minus"
                ></i>
                <span>{cartItem.quantity}</span>
                <i
                  onClick={() => dispatch(updateCartItem({itemId:cartItem.id,qty:1}))}
                  className="fa fa-plus"
                ></i>
              </td>
              <td>{cartItem.quantity * cartItem.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="alert alert-success">
        Cart Total:{" "}
        {cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )}
      </h4>
    </div>
  );
};

export default CartItems;
