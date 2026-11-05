const TRANSACTIONS = [
  {id: 1, reference: "TX-07", amount: 355, day: 4, category: "travel"},
  {id: 2, reference: "TX-10", amount: -100, day: 15, category: "food"},
  {id: 3, reference: "TX-04", amount: 518, day: 10, category: "fun"},
  {id: 4, reference: "TX-08", amount: 1034, day: 25, category: "fun"},
  {id: 5, reference: "TX-05", amount: 965, day: 2, category: "rent"},
  {id: 6, reference: "TX-01", amount: 209, day: 11, category: "travel"},
  {id: 7, reference: "TX-11", amount: -17, day: 5, category: "salary"},
  {id: 8, reference: "TX-12", amount: -318, day: 17, category: "food"}
];

test("with 5", () => {
  expect(allTransactionsUnder(TRANSACTIONS, 5)).toEqual(false);
});

test("with 26", () => {
  expect(allTransactionsUnder(TRANSACTIONS, 26)).toEqual(true);
});

test("with 25", () => {
  expect(allTransactionsUnder(TRANSACTIONS, 25)).toEqual(false);
});
