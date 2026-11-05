interface Transaction {
  id: number;
  reference: string;
  amount: number;
  day: number;
  category: "food" | "rent" | "salary" | "travel" | "fun";
}

export function highestAmount(transactions: Transaction[]): string | null {
  // TODO
  return 0 as any;
}
