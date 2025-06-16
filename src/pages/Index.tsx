
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, Card as CardComponent, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ProductSelector } from "@/components/ProductSelector";
import { RecommendationCard } from "@/components/RecommendationCard";
import { getRecommendations } from "@/utils/recommendationEngine";
import { toast } from "@/hooks/use-toast";
import { Monitor, Mouse, Keyboard, Headphones, Mic, Webcam } from "lucide-react";

interface SelectedProducts {
  mouse: boolean;
  keyboard: boolean;
  wiredHeadphones: boolean;
  wirelessHeadphones: boolean;
  microphoneLapel: boolean;
  microphoneDedicated: boolean;
  monitor: boolean;
  mousepad: boolean;
  webcam: boolean;
}

const Index = () => {
  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<SelectedProducts>({
    mouse: false,
    keyboard: false,
    wiredHeadphones: false,
    wirelessHeadphones: false,
    microphoneLapel: false,
    microphoneDedicated: false,
    monitor: false,
    mousepad: false,
    webcam: false,
  });
  const [recommendations, setRecommendations] = useState<any[]>([]);

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

  const handleProductChange = (productKey: keyof SelectedProducts, checked: boolean) => {
    setSelectedProducts(prev => ({
      ...prev,
      [productKey]: checked
    }));
  };

  const handleGetRecommendations = () => {
    const budgetNumber = parseFloat(budget);
    
    if (!budgetNumber || budgetNumber <= 0) {
      toast({
        title: "Orçamento inválido",
        description: "Por favor, insira um orçamento válido.",
        variant: "destructive",
      });
      return;
    }

    const selectedProductsList = Object.entries(selectedProducts)
      .filter(([_, selected]) => selected)
      .map(([key, _]) => key);

    if (selectedProductsList.length === 0) {
      toast({
        title: "Nenhum produto selecionado",
        description: "Por favor, selecione pelo menos um produto.",
        variant: "destructive",
      });
      return;
    }

    const recs = getRecommendations(selectedProductsList, budgetNumber);
    setRecommendations(recs);
    setStep(3);

    toast({
      title: "Recomendações geradas!",
      description: `Encontramos ${recs.length} produtos para o seu orçamento.`,
    });
  };

  const resetForm = () => {
    setStep(1);
    setBudget("");
    setSelectedProducts({
      mouse: false,
      keyboard: false,
      wiredHeadphones: false,
      wirelessHeadphones: false,
      microphoneLapel: false,
      microphoneDedicated: false,
      monitor: false,
      mousepad: false,
      webcam: false,
    });
    setRecommendations([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Recomendador de Periféricos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre os melhores periféricos para suas necessidades dentro do seu orçamento
          </p>
        </div>

        {step === 1 && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Quais periféricos você precisa?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {productOptions.map((product) => (
                  <div key={product.key} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <Checkbox
                      id={product.key}
                      checked={selectedProducts[product.key as keyof SelectedProducts]}
                      onCheckedChange={(checked) => 
                        handleProductChange(product.key as keyof SelectedProducts, checked as boolean)
                      }
                    />
                    <product.icon className="h-5 w-5 text-blue-600" />
                    <Label htmlFor={product.key} className="cursor-pointer flex-1">
                      {product.label}
                    </Label>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Button 
                  onClick={() => setStep(2)}
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={!Object.values(selectedProducts).some(Boolean)}
                >
                  Continuar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Qual é o seu orçamento?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="budget">Orçamento total (R$)</Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="Ex: 1500"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="text-lg"
                />
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  Voltar
                </Button>
                <Button 
                  onClick={handleGetRecommendations}
                  className="bg-blue-600 hover:bg-blue-700 flex-1"
                >
                  Ver Recomendações
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Suas Recomendações
              </h2>
              <p className="text-gray-600 mb-4">
                Orçamento: R$ {parseFloat(budget).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
              <Button 
                onClick={resetForm}
                variant="outline"
                className="mb-6"
              >
                Nova Consulta
              </Button>
            </div>

            {recommendations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations.map((product, index) => (
                  <RecommendationCard key={index} product={product} />
                ))}
              </div>
            ) : (
              <Card className="max-w-md mx-auto">
                <CardContent className="text-center py-8">
                  <p className="text-gray-600">
                    Não foi possível encontrar recomendações dentro do seu orçamento.
                    Tente aumentar o valor ou reduzir a quantidade de produtos.
                  </p>
                </CardContent>
              </Card>
            )}

            {recommendations.length > 0 && (
              <Card className="mt-8">
                <CardContent className="py-6">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total estimado:</span>
                    <span className="text-blue-600">
                      R$ {recommendations.reduce((total, product) => total + product.price, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
