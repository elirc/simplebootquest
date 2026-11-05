interface Order {
  id: number;
  code: string;
  totalCents: number;
  items: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  country: "UK" | "US" | "DE";
}

export function allOrdersUnder(orders: Order[], limit: number): boolean {
  return orders.every((x) => x.items < limit);
}
