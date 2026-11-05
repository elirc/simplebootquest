interface Transaction {
  id: number;
  reference: string;
  amount: number;
  day: number;
  category: "food" | "rent" | "salary" | "travel" | "fun";
}

export function transactionsInRange(transactions: Transaction[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
