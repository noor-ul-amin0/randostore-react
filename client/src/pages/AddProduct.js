import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/features/products/thunk";
import { toast } from "react-toastify";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();

  const isValidForm = () => {
    if (!name && !price) {
      setFormErrors({
        name: {
          msg: "name is required",
        },
        price: {
          msg: "price is required",
        },
      });
      return false;
    } else if (!name && price) {
      setFormErrors({ name: { msg: "name is required" } });
      return false;
    } else if (name && !price) {
      setFormErrors({
        price: { msg: "price is required" },
      });
      return false;
    } else if (price <= 0) {
      setFormErrors({
        price: { msg: "price must be greater than 0." },
      });
      return false;
    }
    return true; // EVERYTHING FINE
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidForm()) return;
    dispatch(addProduct({ name, price }));
    toast.success("Product Added !", {
      position: toast.POSITION.TOP_CENTER,
    });
    setName("");
    setPrice("");
    setFormErrors({});
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="card"
        style={{ padding: "40px", marginTop: "30px" }}
      >
        <center>Add Item for Sale</center>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            // required
            onChange={(e) => {
              setName(e.target.value);
              setFormErrors({ ...formErrors, name: { msg: "" } });
            }}
          />

          {formErrors?.name?.msg && (
            <p className="alert alert-danger">{formErrors["name"].msg}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            // min="0"
            // required
            onChange={(e) => {
              setPrice(+e.target.value);
              setFormErrors({ ...formErrors, price: { msg: "" } });
            }}
          />
          {formErrors?.price?.msg && (
            <p className="alert alert-danger">{formErrors["price"].msg}</p>
          )}
        </div>

        {/* <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            id="image"
            required
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div> */}

        <div className="">
          <button
            className="btn btn-primary"
            style={{ marginTop: "8px", marginLeft: "450px" }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
