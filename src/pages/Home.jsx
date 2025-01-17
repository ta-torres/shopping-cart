import useProducts from "../hooks/useProducts";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1>Home</h1>
      </section>
      <section className="products container mx-auto px-4">
        <ProductGrid />
      </section>
    </div>
  );
};

export default Home;
