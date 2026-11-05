interface Order {
  id: number;
  code: string;
  totalCents: number;
  items: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  country: "UK" | "US" | "DE";
}

export function summariseOrders(orders: Order[]): { id: number; code: string; totalCents: number }[] {
  // TODO
  return {} as any;
}
