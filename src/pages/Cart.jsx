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
import { Trash2, AlertCircle } from "lucide-react";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-2xl font-bold text-teal-900">Your Cart</h1>
        <Alert className="rounded-xl border-slate-300 bg-slate-100">
          <AlertCircle className="h-5 w-5 text-teal-600" />
          <AlertTitle className="text-teal-800">Your cart is empty</AlertTitle>
          <AlertDescription className="mb-4 text-teal-700">
            Add some items to get started
          </AlertDescription>
          <Link to="/">
            <Button className="bg-teal-600 text-white hover:bg-teal-700">
              Shop Now
            </Button>
          </Link>
        </Alert>
      </div>
    );
  }

  return (
    <div className="grid gap-6 px-4 md:grid-cols-3">
      <div className="space-y-4 md:col-span-2">
        <h1 className="text-xl font-bold text-teal-900 md:text-2xl">
          Your Cart
        </h1>
        <div className="space-y-3">
          {cartItems.map((item) => (
            <Card
              key={item.id}
              className="group flex flex-col gap-4 rounded-xl border border-slate-200 p-4 transition-colors hover:border-slate-300 sm:flex-row"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-24 w-full rounded-lg bg-teal-50 object-contain p-2 sm:w-24"
              />
              <CardContent className="flex-1 space-y-3">
                <CardTitle className="text-base font-medium text-teal-900 md:text-lg">
                  {item.title}
                </CardTitle>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <span className="text-sm font-semibold text-teal-700 md:text-base">
                    ${item.price}
                  </span>
                  <span className="font-bold text-teal-800">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <div className="w-full sm:w-auto">
                    <ProductQuantityInput
                      quantity={item.quantity}
                      onChange={(newQty) => updateQuantity(item.id, newQty)}
                      compact
                    />
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => removeFromCart(item.id)}
                    className="h-auto px-2 py-1 text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    <span className="text-sm">Remove</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="sticky top-8 h-fit rounded-xl border border-slate-300 p-4 md:p-6">
        <h3 className="mb-4 text-lg font-bold text-teal-900 md:text-xl">
          Order Summary
        </h3>
        <div className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-teal-700 md:text-base">Subtotal</span>
            <span className="text-base font-bold text-teal-900 md:text-lg">
              ${cartTotal.toFixed(2)}
            </span>
          </div>
        </div>
        <Button className="w-full rounded-xl bg-teal-600 text-white hover:bg-teal-700">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
