import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          ShopCart
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link to="/cart" className="hover:text-gray-600">
            Cart (0)
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
