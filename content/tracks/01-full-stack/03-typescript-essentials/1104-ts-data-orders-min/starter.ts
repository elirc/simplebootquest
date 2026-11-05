interface Order {
  id: number;
  code: string;
  totalCents: number;
  items: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  country: "UK" | "US" | "DE";
}

export function lowestTotalCents(orders: Order[]): string | null {
  // TODO
  return 0 as any;
}
