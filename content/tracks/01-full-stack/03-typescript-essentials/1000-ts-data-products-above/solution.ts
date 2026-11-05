interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "office" | "tech" | "home";
  onSale: boolean;
}

export function productsAbove(products: Product[], min: number): string[] {
  return products.filter((x) => x.stock > min).map((x) => x.name);
}
