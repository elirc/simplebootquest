interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "office" | "tech" | "home";
  onSale: boolean;
}

export function averageStock(products: Product[]): number | null {
  if (products.length === 0) return null;
  const total = products.reduce((sum, x) => sum + x.stock, 0);
  return Math.round((total / products.length) * 10) / 10;
}
