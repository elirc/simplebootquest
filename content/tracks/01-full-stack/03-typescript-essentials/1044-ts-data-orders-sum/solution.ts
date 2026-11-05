interface Order {
  id: number;
  code: string;
  totalCents: number;
  items: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  country: "UK" | "US" | "DE";
}

export function totalTotalCents(orders: Order[]): number {
  return orders.reduce((sum, x) => sum + x.totalCents, 0);
}
