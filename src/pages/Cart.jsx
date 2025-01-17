import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Cart = () => {
  return (
    <div>
      <h1 className="mb-4">Cart</h1>

      <Alert>
        <AlertTitle>Your cart is empty</AlertTitle>
        <AlertDescription>Add some items to get started</AlertDescription>
        <Link to="/">
          <Button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Shop Now
          </Button>
        </Link>
      </Alert>
    </div>
  );
};

export default Cart;
