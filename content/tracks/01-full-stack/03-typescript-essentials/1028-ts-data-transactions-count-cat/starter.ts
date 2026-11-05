interface Transaction {
  id: number;
  reference: string;
  amount: number;
  day: number;
  category: "food" | "rent" | "salary" | "travel" | "fun";
}

export function countTransactionsByCategory(transactions: Transaction[], value: string): number {
  // TODO
  return 0 as any;
}
