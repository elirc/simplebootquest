const TRANSACTIONS = [
  {id: 1, reference: "TX-12", amount: -84, day: 6, category: "travel"},
  {id: 2, reference: "TX-10", amount: 62, day: 10, category: "food"},
  {id: 3, reference: "TX-07", amount: 1181, day: 20, category: "rent"},
  {id: 4, reference: "TX-02", amount: 528, day: 26, category: "fun"},
  {id: 5, reference: "TX-08", amount: 93, day: 17, category: "travel"},
  {id: 6, reference: "TX-11", amount: 515, day: 21, category: "rent"},
  {id: 7, reference: "TX-06", amount: -165, day: 7, category: "salary"},
  {id: 8, reference: "TX-01", amount: -351, day: 6, category: "rent"}
];

function transactionsInRange(transactions, low, high) {
  return transactions.filter((x) => x.amount >= low && x.amount <= high).map((x) => x.reference);
}
