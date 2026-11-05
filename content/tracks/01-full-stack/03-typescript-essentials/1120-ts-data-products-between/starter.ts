interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "office" | "tech" | "home";
  onSale: boolean;
}

export function productsInRange(products: Product[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
