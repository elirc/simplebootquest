interface Order {
  id: number;
  code: string;
  totalCents: number;
  items: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  country: "UK" | "US" | "DE";
}

export function countOrdersByCountry(orders: Order[], value: string): number {
  // TODO
  return 0 as any;
}
