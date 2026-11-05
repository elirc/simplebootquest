// mutant: reduce starts from 1 instead of 0
const TRANSACTIONS = [
  {id: 1, reference: "TX-01", amount: 622, day: 6, category: "rent"},
  {id: 2, reference: "TX-08", amount: 654, day: 3, category: "fun"},
  {id: 3, reference: "TX-06", amount: -41, day: 9, category: "fun"},
  {id: 4, reference: "TX-07", amount: 1196, day: 24, category: "food"},
  {id: 5, reference: "TX-12", amount: 721, day: 5, category: "rent"},
  {id: 6, reference: "TX-10", amount: 281, day: 18, category: "rent"},
  {id: 7, reference: "TX-09", amount: 508, day: 25, category: "rent"},
  {id: 8, reference: "TX-05", amount: 1181, day: 5, category: "travel"}
];

function averageAmount(transactions) {
  if (transactions.length === 0) return null;
  const total = transactions.reduce((sum, x) => sum + x.amount, 1);
  return Math.round((total / transactions.length) * 10) / 10;
}
