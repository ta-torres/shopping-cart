const Footer = () => {
  return (
    <footer className="bg-teal-800 py-8 shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-bold text-teal-100 transition-colors hover:text-teal-200">
          ShopCart © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
