interface Order {
  id: number;
  code: string;
  totalCents: number;
  items: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  country: "UK" | "US" | "DE";
}

export function ordersAbove(orders: Order[], min: number): string[] {
  return orders.filter((x) => x.totalCents > min).map((x) => x.code);
}
