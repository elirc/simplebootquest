interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "office" | "tech" | "home";
  onSale: boolean;
}

export function countProductsByCategory(products: Product[], value: string): number {
  let count = 0;
  for (const x of products) if (x.category === value) count++;
  return count;
}
