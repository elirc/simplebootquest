interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "office" | "tech" | "home";
  onSale: boolean;
}

export function lowestStock(products: Product[]): string | null {
  let best = null;
  for (const x of products) if (best === null || x.stock < best.stock) best = x;
  return best ? best.name : null;
}
