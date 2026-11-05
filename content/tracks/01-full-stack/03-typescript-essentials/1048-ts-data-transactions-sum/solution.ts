interface Transaction {
  id: number;
  reference: string;
  amount: number;
  day: number;
  category: "food" | "rent" | "salary" | "travel" | "fun";
}

export function totalDay(transactions: Transaction[]): number {
  return transactions.reduce((sum, x) => sum + x.day, 0);
}
