interface Transaction {
  id: number;
  reference: string;
  amount: number;
  day: number;
  category: "food" | "rent" | "salary" | "travel" | "fun";
}

export function countTransactionsByCategory(transactions: Transaction[], value: string): number {
  let count = 0;
  for (const x of transactions) if (x.category === value) count++;
  return count;
}
