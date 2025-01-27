import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Home, ShoppingCart, ShoppingBag } from "lucide-react";

const Header = () => {
  const { cartQuantity } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-teal-800 shadow-lg transition-all duration-300">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-teal-50 transition-colors hover:text-white"
        >
          <ShoppingBag className="h-6 w-6" />
          <span>ShopCart</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="group flex items-center gap-2 text-teal-100 transition-colors hover:text-white"
          >
            <Home className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <Link
            to="/cart"
            className="group relative flex items-center gap-2 text-teal-100 transition-colors hover:text-white"
          >
            <ShoppingCart className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline">Cart</span>
            {cartQuantity > 0 && (
              <span className="rounded-full bg-teal-600 px-2 py-1 text-xs font-bold text-white">
                {cartQuantity}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
