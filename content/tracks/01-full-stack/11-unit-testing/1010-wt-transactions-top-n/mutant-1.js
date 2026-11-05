// mutant: sort direction reversed
const TRANSACTIONS = [
  {id: 1, reference: "TX-04", amount: -171, day: 17, category: "fun"},
  {id: 2, reference: "TX-12", amount: 940, day: 4, category: "salary"},
  {id: 3, reference: "TX-06", amount: -149, day: 13, category: "salary"},
  {id: 4, reference: "TX-09", amount: -341, day: 1, category: "salary"},
  {id: 5, reference: "TX-03", amount: 741, day: 13, category: "food"},
  {id: 6, reference: "TX-02", amount: 993, day: 25, category: "salary"},
  {id: 7, reference: "TX-05", amount: 277, day: 21, category: "travel"},
  {id: 8, reference: "TX-08", amount: 447, day: 12, category: "fun"}
];

function topTransactionsByDay(transactions, n) {
  return [...transactions].sort((a, b) => a.day - b.day).slice(0, n).map((x) => x.reference);
}
