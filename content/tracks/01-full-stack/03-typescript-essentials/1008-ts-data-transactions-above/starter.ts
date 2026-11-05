interface Transaction {
  id: number;
  reference: string;
  amount: number;
  day: number;
  category: "food" | "rent" | "salary" | "travel" | "fun";
}

export function transactionsAbove(transactions: Transaction[], min: number): string[] {
  // TODO
  return [] as any;
}
