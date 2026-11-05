interface Transaction {
  id: number;
  reference: string;
  amount: number;
  day: number;
  category: "food" | "rent" | "salary" | "travel" | "fun";
}

export function summariseTransactions(transactions: Transaction[]): { id: number; reference: string; day: number }[] {
  return transactions.map(({ id, reference, day }) => ({ id, reference, day }));
}
