import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductQuantityInput = ({ quantity, onChange }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    onChange(Math.max(1, Math.min(value, 10)));
  };

  const increment = () => onChange(Math.min(quantity + 1, 10));
  const decrement = () => onChange(Math.max(quantity - 1, 1));

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={decrement}
        className="h-8 w-8 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
      >
        -
      </Button>

      <Input
        type="number"
        min="1"
        max="99"
        value={quantity}
        onChange={handleInputChange}
        className="h-8 w-16 border-slate-300 text-center focus:border-slate-400"
      />

      <Button
        variant="outline"
        size="icon"
        onClick={increment}
        className="h-8 w-8 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
      >
        +
      </Button>
    </div>
  );
};

export default ProductQuantityInput;
