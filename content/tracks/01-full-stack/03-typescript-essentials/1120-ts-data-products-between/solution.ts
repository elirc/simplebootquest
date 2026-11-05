interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "office" | "tech" | "home";
  onSale: boolean;
}

export function productsInRange(products: Product[], low: number, high: number): string[] {
  return products.filter((x) => x.stock >= low && x.stock <= high).map((x) => x.name);
}
