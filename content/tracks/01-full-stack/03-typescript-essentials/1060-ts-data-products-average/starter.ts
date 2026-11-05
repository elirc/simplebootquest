interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "office" | "tech" | "home";
  onSale: boolean;
}

export function averageStock(products: Product[]): number | null {
  // TODO
  return 0 as any;
}
