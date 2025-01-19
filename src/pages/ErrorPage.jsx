import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <div class="bg-gray-100">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-8xl font-bold text-gray-800">404</h1>
        <p class="text-4xl font-medium text-gray-800">Page Not Found</p>
        <Link to="/">
          <Button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Go back home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
