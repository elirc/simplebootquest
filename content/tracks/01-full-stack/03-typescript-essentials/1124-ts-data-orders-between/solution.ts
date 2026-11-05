interface Order {
  id: number;
  code: string;
  totalCents: number;
  items: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  country: "UK" | "US" | "DE";
}

export function ordersInRange(orders: Order[], low: number, high: number): string[] {
  return orders.filter((x) => x.totalCents >= low && x.totalCents <= high).map((x) => x.code);
}
