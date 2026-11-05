const TRANSACTIONS = [
  {id: 1, reference: "TX-03", amount: 78, day: 20, category: "salary"},
  {id: 2, reference: "TX-05", amount: 534, day: 27, category: "fun"},
  {id: 3, reference: "TX-06", amount: 645, day: 2, category: "salary"},
  {id: 4, reference: "TX-04", amount: 873, day: 6, category: "salary"},
  {id: 5, reference: "TX-09", amount: 310, day: 25, category: "rent"},
  {id: 6, reference: "TX-07", amount: 815, day: 7, category: "salary"},
  {id: 7, reference: "TX-02", amount: -360, day: 20, category: "travel"},
  {id: 8, reference: "TX-10", amount: 1119, day: 23, category: "travel"}
];

test("with 310, 645", () => {
  expect(transactionsInRange(TRANSACTIONS, 310, 645)).toEqual(["TX-05","TX-06","TX-09"]);
});

test("with 645, 815", () => {
  expect(transactionsInRange(TRANSACTIONS, 645, 815)).toEqual(["TX-06","TX-07"]);
});

test("with 310, 310", () => {
  expect(transactionsInRange(TRANSACTIONS, 310, 310)).toEqual(["TX-09"]);
});
