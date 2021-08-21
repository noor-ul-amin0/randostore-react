import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../redux/features/cart/cartSlice";
import { selectProductById } from "../redux/features/products/selectors";
function ProductListItem({ id }) {
  const dispatch = useDispatch();
  // Call our `selectTodoById` with the state _and_ the ID value
  const product = useSelector((state) => selectProductById(state, id));
  const { img, name, price } = product;
  // Add Item to Cart (localStorage)
  const addItemToCart = (product) => {
    dispatch(addCartItem(product));
  };
  return (
    <div className="col">
      <div className="card">
        <img
          style={{ width: "354px", height: "356px" }}
          src={
            img
              ? `http://localhost:5000${img.replace(".", "")}`
              : "http://localhost:5000/img/cookies.jpg"
          }
          className="card-img-top"
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-text" style={{ color: "goldenrod" }}>
            RS: {price}
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
  );
}

export default ProductListItem;
