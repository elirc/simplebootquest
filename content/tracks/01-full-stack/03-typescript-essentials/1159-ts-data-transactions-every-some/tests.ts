const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: 768, day: 6, category: "travel"},
  {id: 2, reference: "TX-06", amount: -12, day: 3, category: "travel"},
  {id: 3, reference: "TX-05", amount: 934, day: 25, category: "food"},
  {id: 4, reference: "TX-12", amount: 144, day: 27, category: "fun"},
  {id: 5, reference: "TX-02", amount: 574, day: 20, category: "rent"},
  {id: 6, reference: "TX-01", amount: 375, day: 12, category: "fun"},
  {id: 7, reference: "TX-04", amount: 152, day: 24, category: "salary"},
  {id: 8, reference: "TX-07", amount: 450, day: 19, category: "food"}
];

test("with 12", () => {
  expect(allTransactionsUnder(TRANSACTIONS, 12)).toEqual(false);
});

test("with 28", () => {
  expect(allTransactionsUnder(TRANSACTIONS, 28)).toEqual(true);
});

test("with 27", () => {
  expect(allTransactionsUnder(TRANSACTIONS, 27)).toEqual(false);
});
