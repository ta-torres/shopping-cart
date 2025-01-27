import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import ProductQuantityInput from "./ProductQuantityInput";
import { useState } from "react";
import { ShoppingCart, Tag } from "lucide-react";

const ProductCard = ({ product }) => {
  const { addToCart, getItemQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const itemQuantity = getItemQuantity(product.id);
    if (itemQuantity + quantity > 10) {
      alert("You can't add more than 10 of the same product to the cart.");
      return;
    }
    for (let i = 0; i < quantity; i++) addToCart(product);
    setQuantity(1);
  };

  return (
    <Card className="flex flex-col justify-between rounded-xl border border-slate-300 bg-white shadow-md transition-shadow hover:shadow-lg">
      <CardHeader>
        <img
          src={product.image}
          alt={product.title}
          className="mb-4 h-48 w-full rounded-xl bg-teal-50 object-contain p-4"
        />
        <CardTitle className="line-clamp-2 font-semibold text-teal-900">
          {product.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-teal-700">
          <div className="flex items-center gap-2">
            <Tag className="h-5 w-5" />
            <span className="text-xl font-bold">${product.price}</span>
          </div>
          <ProductQuantityInput quantity={quantity} onChange={setQuantity} />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="w-full bg-teal-600 font-medium text-white transition-colors hover:bg-teal-700"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="center"
            sideOffset={4}
            className="h-max w-max rounded-xl border border-slate-400"
          >
            <p>Added to cart</p>
          </PopoverContent>
        </Popover>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
