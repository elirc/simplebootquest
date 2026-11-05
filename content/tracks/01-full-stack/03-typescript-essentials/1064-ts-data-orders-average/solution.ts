interface Order {
  id: number;
  code: string;
  totalCents: number;
  items: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  country: "UK" | "US" | "DE";
}

export function averageTotalCents(orders: Order[]): number | null {
  if (orders.length === 0) return null;
  const total = orders.reduce((sum, x) => sum + x.totalCents, 0);
  return Math.round((total / orders.length) * 10) / 10;
}
