const ProductList = ({ products, addToCart }) => {
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

  // JSX
  return (
    <div className="container mt-5 mb-3">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card">
              <img
                style={{ width: "354px", height: "356px" }}
                src={
                  product.img
                    ? `http://localhost:5000${product.img.replace(".", "")}`
                    : "http://localhost:5000/img/cookies.jpg"
                }
                className="card-img-top"
                alt={product.name}
              />
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
        ))}
      </div>
    </div>
  );
};

export default ProductList;
