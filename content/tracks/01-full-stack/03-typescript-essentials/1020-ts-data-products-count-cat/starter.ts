interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "office" | "tech" | "home";
  onSale: boolean;
}

export function countProductsByCategory(products: Product[], value: string): number {
  // TODO
  return 0 as any;
}
