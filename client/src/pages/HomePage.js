import ProductList from "../components/ProductList";
const HomePage = ({ products, addToCart }) => {
  return (
    products.length > 0 && (
      <ProductList products={products} addToCart={addToCart} />
    )
  );
};

export default HomePage;
