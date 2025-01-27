import useProducts from "../hooks/useProducts";
import ProductGrid from "../components/ProductGrid";
import { ShoppingBag, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";

const Home = () => {
  return (
    <div>
      <section className="mb-8 md:mb-12">
        <div className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-800 px-4 py-8 text-white md:py-12">
          <div className="container mx-auto max-w-4xl text-center">
            <ShoppingBag className="mx-auto mb-6 h-12 w-12 text-teal-200" />
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              Welcome to ShopCart
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-teal-100 md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                className="flex items-center rounded-full bg-teal-50 px-10 py-5 text-lg text-teal-900 transition-colors hover:bg-teal-100"
                onClick={() => {
                  const products = document.querySelector(".products");
                  products.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="products container mx-auto px-4">
        <ProductGrid />
      </section>
    </div>
  );
};

export default Home;
