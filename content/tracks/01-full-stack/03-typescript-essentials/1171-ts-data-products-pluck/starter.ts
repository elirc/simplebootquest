interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "office" | "tech" | "home";
  onSale: boolean;
}

export function summariseProducts(products: Product[]): { id: number; name: string; price: number }[] {
  // TODO
  return {} as any;
}
