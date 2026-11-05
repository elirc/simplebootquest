const TRANSACTIONS = [
  {id: 1, reference: "TX-01", amount: 306, day: 3, category: "food"},
  {id: 2, reference: "TX-08", amount: -75, day: 27, category: "salary"},
  {id: 3, reference: "TX-12", amount: -261, day: 5, category: "food"},
  {id: 4, reference: "TX-02", amount: -197, day: 8, category: "fun"},
  {id: 5, reference: "TX-09", amount: 74, day: 23, category: "salary"},
  {id: 6, reference: "TX-06", amount: 447, day: 6, category: "travel"},
  {id: 7, reference: "TX-05", amount: 150, day: 2, category: "rent"},
  {id: 8, reference: "TX-10", amount: -92, day: 18, category: "salary"}
];

test("with 5, 8", () => {
  expect(transactionsInRange(TRANSACTIONS, 5, 8)).toEqual(["TX-12","TX-02","TX-06"]);
});

test("with 8, 18", () => {
  expect(transactionsInRange(TRANSACTIONS, 8, 18)).toEqual(["TX-02","TX-10"]);
});

test("with 5, 5", () => {
  expect(transactionsInRange(TRANSACTIONS, 5, 5)).toEqual(["TX-12"]);
});
