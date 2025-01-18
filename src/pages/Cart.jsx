import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import ProductQuantityInput from "../components/ProductQuantityInput";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <div>
          <h1 className="mb-4">Cart</h1>
        </div>
        <Alert className="max-w-max">
          <AlertTitle>Your cart is empty</AlertTitle>
          <AlertDescription>Add some items to get started</AlertDescription>
          <Link to="/">
            <Button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Shop Now
            </Button>
          </Link>
        </Alert>
      </>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <div>
          <h1 className="mb-4">Cart</h1>
        </div>
        <div className="space-y-2">
          {cartItems.map((item) => (
            <Card key={item.id} className="flex gap-4 p-4 rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />
              <CardContent>
                <CardTitle className="font-medium">{item.title}</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  ${item.price}. Quantity: {item.quantity}. Total: $
                  {(item.price * item.quantity).toFixed(2)}
                </CardDescription>
                <div className="flex items-center gap-2 mt-2">
                  <ProductQuantityInput
                    quantity={item.quantity}
                    onChange={(newQuantity) =>
                      updateQuantity(item.id, newQuantity)
                    }
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg h-fit">
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>
        <Button className="w-full">Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
