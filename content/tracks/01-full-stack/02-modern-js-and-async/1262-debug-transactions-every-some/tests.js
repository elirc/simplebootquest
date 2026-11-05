const TRANSACTIONS = [
  {id: 1, reference: "TX-02", amount: 148, day: 17, category: "salary"},
  {id: 2, reference: "TX-12", amount: 798, day: 22, category: "salary"},
  {id: 3, reference: "TX-03", amount: 8, day: 8, category: "salary"},
  {id: 4, reference: "TX-07", amount: 107, day: 12, category: "salary"},
  {id: 5, reference: "TX-10", amount: 1179, day: 16, category: "rent"},
  {id: 6, reference: "TX-05", amount: 950, day: 24, category: "salary"},
  {id: 7, reference: "TX-08", amount: 1197, day: 16, category: "travel"},
  {id: 8, reference: "TX-01", amount: -70, day: 20, category: "travel"}
];

test("with 16", () => {
  expect(allTransactionsUnder(TRANSACTIONS, 16)).toEqual(false);
});

test("with 25", () => {
  expect(allTransactionsUnder(TRANSACTIONS, 25)).toEqual(true);
});

test("with 24", () => {
  expect(allTransactionsUnder(TRANSACTIONS, 24)).toEqual(false);
});
