interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "office" | "tech" | "home";
  onSale: boolean;
}

export function summariseProducts(products: Product[]): { id: number; name: string; price: number }[] {
  return products.map(({ id, name, price }) => ({ id, name, price }));
}
