import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <main className="bg-neutral-50">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="container mx-auto flex-grow px-4 py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </main>
  );
};

export default RootLayout;
