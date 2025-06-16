
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Monitor, Mouse, Keyboard, Headphones, Mic, Webcam } from "lucide-react";

interface ProductSelectorProps {
  selectedProducts: Record<string, boolean>;
  onProductChange: (productKey: string, checked: boolean) => void;
}

export const ProductSelector = ({ selectedProducts, onProductChange }: ProductSelectorProps) => {
  const productOptions = [
    { key: 'mouse', label: 'Mouse', icon: Mouse },
    { key: 'keyboard', label: 'Teclado', icon: Keyboard },
    { key: 'wiredHeadphones', label: 'Fone com Fio', icon: Headphones },
    { key: 'wirelessHeadphones', label: 'Fone Sem Fio', icon: Headphones },
    { key: 'microphoneLapel', label: 'Microfone de Lapela', icon: Mic },
    { key: 'microphoneDedicated', label: 'Microfone Dedicado', icon: Mic },
    { key: 'monitor', label: 'Monitor', icon: Monitor },
    { key: 'mousepad', label: 'Mousepad', icon: Mouse },
    { key: 'webcam', label: 'Webcam', icon: Webcam },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {productOptions.map((product) => (
        <div key={product.key} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
          <Checkbox
            id={product.key}
            checked={selectedProducts[product.key] || false}
            onCheckedChange={(checked) => onProductChange(product.key, checked as boolean)}
          />
          <product.icon className="h-5 w-5 text-blue-600" />
          <Label htmlFor={product.key} className="cursor-pointer flex-1">
            {product.label}
          </Label>
        </div>
      ))}
    </div>
  );
};
