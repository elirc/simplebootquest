interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "office" | "tech" | "home";
  onSale: boolean;
}

export function percentOnSale(products: Product[]): number {
  if (products.length === 0) return 0;
  return Math.round((products.filter((x) => x.onSale).length / products.length) * 100);
}
