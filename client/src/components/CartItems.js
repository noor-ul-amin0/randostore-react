const CartItems = ({ cartItems, updateCartItems }) => {
  const handleClick = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    updateCartItems(updatedCartItems);
  };
  const handleQty = (itemId, qty) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + qty } : item
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    updateCartItems(updatedCartItems);
  };
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
                  onClick={() => handleClick(cartItem.id)}
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
                  onClick={() => handleQty(cartItem.id, -1)}
                  className="fa fa-minus"
                ></i>
                <span>{cartItem.quantity}</span>
                <i
                  onClick={() => handleQty(cartItem.id, 1)}
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
