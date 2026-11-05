interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "office" | "tech" | "home";
  onSale: boolean;
}

export function percentOnSale(products: Product[]): number {
  // TODO
  return 0 as any;
}
