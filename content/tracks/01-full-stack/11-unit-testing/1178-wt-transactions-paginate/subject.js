const TRANSACTIONS = [
  {id: 1, reference: "TX-06", amount: 293, day: 7, category: "food"},
  {id: 2, reference: "TX-08", amount: 688, day: 14, category: "travel"},
  {id: 3, reference: "TX-05", amount: 663, day: 19, category: "travel"},
  {id: 4, reference: "TX-11", amount: 1180, day: 17, category: "rent"},
  {id: 5, reference: "TX-01", amount: 104, day: 26, category: "salary"},
  {id: 6, reference: "TX-09", amount: 105, day: 24, category: "food"},
  {id: 7, reference: "TX-02", amount: 812, day: 7, category: "rent"},
  {id: 8, reference: "TX-03", amount: 251, day: 12, category: "salary"}
];

function pageOfTransactions(transactions, page, size) {
  const totalPages = Math.ceil(transactions.length / size);
  const items = transactions.slice((page - 1) * size, page * size).map((x) => x.reference);
  return { items, page, totalPages };
}
