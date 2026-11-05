const TRANSACTIONS = [
  {id: 1, reference: "TX-06", amount: -39, day: 19, category: "food"},
  {id: 2, reference: "TX-01", amount: 93, day: 21, category: "salary"},
  {id: 3, reference: "TX-07", amount: 1106, day: 23, category: "fun"},
  {id: 4, reference: "TX-08", amount: 214, day: 8, category: "salary"},
  {id: 5, reference: "TX-03", amount: 774, day: 18, category: "salary"},
  {id: 6, reference: "TX-10", amount: -323, day: 26, category: "travel"},
  {id: 7, reference: "TX-09", amount: -235, day: 5, category: "fun"},
  {id: 8, reference: "TX-12", amount: 1192, day: 1, category: "food"}
];

function transactionsInCategoryRanked(transactions, value) {
  return transactions
    .filter((x) => x.category === value)
    .sort((a, b) => b.day - a.day)
    .map((x) => x.reference);
}
