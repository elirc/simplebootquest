// mutant: sorts (mutates) the input array in place
const TRANSACTIONS = [
  {id: 1, reference: "TX-02", amount: 529, day: 24, category: "fun"},
  {id: 2, reference: "TX-08", amount: 460, day: 11, category: "travel"},
  {id: 3, reference: "TX-03", amount: 249, day: 24, category: "food"},
  {id: 4, reference: "TX-10", amount: 723, day: 3, category: "fun"},
  {id: 5, reference: "TX-09", amount: -289, day: 5, category: "rent"},
  {id: 6, reference: "TX-12", amount: 381, day: 21, category: "rent"},
  {id: 7, reference: "TX-06", amount: -46, day: 14, category: "rent"},
  {id: 8, reference: "TX-11", amount: 534, day: 16, category: "food"}
];

function transactionsByAmount(transactions) {
  return transactions.sort((a, b) => a.amount - b.amount).map((x) => x.reference);
}
