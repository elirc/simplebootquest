interface Transaction {
  id: number;
  reference: string;
  amount: number;
  day: number;
  category: "food" | "rent" | "salary" | "travel" | "fun";
}

export function allTransactionsUnder(transactions: Transaction[], limit: number): boolean {
  // TODO
  return 0 as any;
}
