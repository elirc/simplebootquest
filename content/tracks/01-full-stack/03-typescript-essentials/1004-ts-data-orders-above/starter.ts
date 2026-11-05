interface Order {
  id: number;
  code: string;
  totalCents: number;
  items: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  country: "UK" | "US" | "DE";
}

export function ordersAbove(orders: Order[], min: number): string[] {
  // TODO
  return [] as any;
}
