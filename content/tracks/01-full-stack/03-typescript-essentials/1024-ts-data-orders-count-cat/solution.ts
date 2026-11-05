interface Order {
  id: number;
  code: string;
  totalCents: number;
  items: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  country: "UK" | "US" | "DE";
}

export function countOrdersByCountry(orders: Order[], value: string): number {
  let count = 0;
  for (const x of orders) if (x.country === value) count++;
  return count;
}
