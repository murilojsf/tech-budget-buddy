
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Mouse, Keyboard, Headphones, Mic, Webcam } from "lucide-react";

interface Product {
  name: string;
  brand: string;
  price: number;
  category: string;
  specs: string[];
  rating?: number;
}

interface RecommendationCardProps {
  product: Product;
}

export const RecommendationCard = ({ product }: RecommendationCardProps) => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'mouse':
      case 'mousepad':
        return Mouse;
      case 'keyboard':
        return Keyboard;
      case 'wiredHeadphones':
      case 'wirelessHeadphones':
        return Headphones;
      case 'microphoneLapel':
      case 'microphoneDedicated':
        return Mic;
      case 'monitor':
        return Monitor;
      case 'webcam':
        return Webcam;
      default:
        return Monitor;
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      mouse: 'Mouse',
      keyboard: 'Teclado',
      wiredHeadphones: 'Fone com Fio',
      wirelessHeadphones: 'Fone Sem Fio',
      microphoneLapel: 'Microfone Lapela',
      microphoneDedicated: 'Microfone Dedicado',
      monitor: 'Monitor',
      mousepad: 'Mousepad',
      webcam: 'Webcam',
    };
    return labels[category] || category;
  };

  const IconComponent = getIcon(product.category);

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {getCategoryLabel(product.category)}
          </Badge>
          <IconComponent className="h-5 w-5 text-blue-600" />
        </div>
        <CardTitle className="text-lg line-clamp-2">
          {product.brand} {product.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="text-2xl font-bold text-blue-600">
            R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          
          {product.rating && (
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm text-gray-600">{product.rating}/5</span>
            </div>
          )}

          <div className="space-y-1">
            <h4 className="text-sm font-medium text-gray-900">Especificações:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {product.specs.map((spec, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
