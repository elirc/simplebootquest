interface Transaction {
  id: number;
  reference: string;
  amount: number;
  day: number;
  category: "food" | "rent" | "salary" | "travel" | "fun";
}

export function lowestAmount(transactions: Transaction[]): string | null {
  let best = null;
  for (const x of transactions) if (best === null || x.amount < best.amount) best = x;
  return best ? best.reference : null;
}
