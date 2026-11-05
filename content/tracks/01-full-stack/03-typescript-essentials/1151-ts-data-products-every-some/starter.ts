interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "office" | "tech" | "home";
  onSale: boolean;
}

export function allProductsUnder(products: Product[], limit: number): boolean {
  // TODO
  return 0 as any;
}
