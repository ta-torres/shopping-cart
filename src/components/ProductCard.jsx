import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import ProductQuantityInput from "./ProductQuantityInput";
import { useState } from "react";

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
    <Card className="rounded-lg flex flex-col justify-between">
      <CardHeader>
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain mb-4"
        />
        <CardTitle className="font-medium mb-2">{product.title}</CardTitle>
        <CardDescription className="text-gray-600 mb-4 text-xl">
          ${product.price}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProductQuantityInput
          quantity={quantity}
          onChange={(newQuantity) => setQuantity(newQuantity)}
        />
        <Button
          className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-auto hover:bg-blue-600"
          onClick={() => handleAddToCart()}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
