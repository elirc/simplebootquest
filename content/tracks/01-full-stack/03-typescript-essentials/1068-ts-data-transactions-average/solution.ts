interface Transaction {
  id: number;
  reference: string;
  amount: number;
  day: number;
  category: "food" | "rent" | "salary" | "travel" | "fun";
}

export function averageDay(transactions: Transaction[]): number | null {
  if (transactions.length === 0) return null;
  const total = transactions.reduce((sum, x) => sum + x.day, 0);
  return Math.round((total / transactions.length) * 10) / 10;
}
