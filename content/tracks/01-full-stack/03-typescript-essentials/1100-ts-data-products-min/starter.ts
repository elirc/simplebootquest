interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "office" | "tech" | "home";
  onSale: boolean;
}

export function lowestStock(products: Product[]): string | null {
  // TODO
  return 0 as any;
}
