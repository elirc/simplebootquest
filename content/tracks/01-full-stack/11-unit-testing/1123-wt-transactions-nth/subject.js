const TRANSACTIONS = [
  {id: 1, reference: "TX-07", amount: 131, day: 7, category: "rent"},
  {id: 2, reference: "TX-05", amount: 185, day: 3, category: "salary"},
  {id: 3, reference: "TX-04", amount: 1018, day: 14, category: "fun"},
  {id: 4, reference: "TX-01", amount: 168, day: 12, category: "travel"},
  {id: 5, reference: "TX-08", amount: 854, day: 5, category: "rent"},
  {id: 6, reference: "TX-11", amount: 59, day: 6, category: "rent"},
  {id: 7, reference: "TX-09", amount: 555, day: 5, category: "salary"},
  {id: 8, reference: "TX-03", amount: -167, day: 17, category: "food"}
];

function nthByAmount(transactions, n) {
  const sorted = [...transactions].sort((a, b) => b.amount - a.amount);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].reference : null;
}
