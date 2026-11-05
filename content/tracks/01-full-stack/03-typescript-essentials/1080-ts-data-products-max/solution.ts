interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "office" | "tech" | "home";
  onSale: boolean;
}

export function highestPrice(products: Product[]): string | null {
  let best = null;
  for (const x of products) if (best === null || x.price > best.price) best = x;
  return best ? best.name : null;
}
