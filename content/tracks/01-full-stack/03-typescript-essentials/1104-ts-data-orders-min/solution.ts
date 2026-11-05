interface Order {
  id: number;
  code: string;
  totalCents: number;
  items: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  country: "UK" | "US" | "DE";
}

export function lowestTotalCents(orders: Order[]): string | null {
  let best = null;
  for (const x of orders) if (best === null || x.totalCents < best.totalCents) best = x;
  return best ? best.code : null;
}
