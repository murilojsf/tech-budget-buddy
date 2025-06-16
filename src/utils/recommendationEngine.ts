
import { productDatabase, Product } from "./productDatabase";

interface BudgetAllocation {
  [key: string]: number;
}

// Porcentagens sugeridas do orçamento para cada categoria
const budgetPercentages: BudgetAllocation = {
  mouse: 0.10,
  keyboard: 0.15,
  wiredHeadphones: 0.15,
  wirelessHeadphones: 0.25,
  microphoneLapel: 0.10,
  microphoneDedicated: 0.20,
  monitor: 0.40,
  mousepad: 0.05,
  webcam: 0.15,
};

export const getRecommendations = (selectedProducts: string[], totalBudget: number): Product[] => {
  console.log("Selected products:", selectedProducts);
  console.log("Total budget:", totalBudget);

  // Calcular a distribuição do orçamento
  const totalPercentage = selectedProducts.reduce((sum, product) => {
    return sum + (budgetPercentages[product] || 0);
  }, 0);

  const recommendations: Product[] = [];

  for (const productCategory of selectedProducts) {
    const categoryBudget = (totalBudget * (budgetPercentages[productCategory] || 0)) / totalPercentage;
    console.log(`Budget for ${productCategory}: R$ ${categoryBudget.toFixed(2)}`);

    // Filtrar produtos da categoria
    const categoryProducts = productDatabase.filter(product => product.category === productCategory);
    
    // Filtrar produtos dentro do orçamento da categoria
    const affordableProducts = categoryProducts.filter(product => product.price <= categoryBudget * 1.2); // 20% de flexibilidade

    if (affordableProducts.length > 0) {
      // Ordenar por melhor custo-benefício (rating/preço)
      affordableProducts.sort((a, b) => {
        const scoreA = (a.rating || 4) / a.price * 1000;
        const scoreB = (b.rating || 4) / b.price * 1000;
        return scoreB - scoreA;
      });

      recommendations.push(affordableProducts[0]);
    }
  }

  console.log("Final recommendations:", recommendations);
  return recommendations;
};
