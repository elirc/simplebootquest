// mutant: search became case-sensitive
const TRANSACTIONS = [
  {id: 1, reference: "TX-06", amount: 964, day: 6, category: "fun"},
  {id: 2, reference: "TX-10", amount: 59, day: 8, category: "travel"},
  {id: 3, reference: "TX-07", amount: 650, day: 3, category: "fun"},
  {id: 4, reference: "TX-01", amount: -390, day: 4, category: "salary"},
  {id: 5, reference: "TX-05", amount: 382, day: 23, category: "fun"},
  {id: 6, reference: "TX-02", amount: 28, day: 25, category: "fun"},
  {id: 7, reference: "TX-09", amount: -206, day: 25, category: "travel"},
  {id: 8, reference: "TX-11", amount: -227, day: 27, category: "food"}
];

function searchTransactions(transactions, query) {
  const q = query.trim().toLowerCase();
  return transactions.filter((x) => x.reference.includes(q)).map((x) => x.reference);
}
