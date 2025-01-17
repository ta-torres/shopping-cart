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

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

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
        <Button
          className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-auto hover:bg-blue-600"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
