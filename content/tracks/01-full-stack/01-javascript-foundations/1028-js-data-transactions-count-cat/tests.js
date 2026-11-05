const TRANSACTIONS = [
  {id: 1, reference: "TX-06", amount: 502, day: 6, category: "travel"},
  {id: 2, reference: "TX-11", amount: 679, day: 25, category: "food"},
  {id: 3, reference: "TX-10", amount: 645, day: 22, category: "rent"},
  {id: 4, reference: "TX-04", amount: -357, day: 2, category: "food"},
  {id: 5, reference: "TX-05", amount: -126, day: 13, category: "food"},
  {id: 6, reference: "TX-03", amount: 1167, day: 13, category: "food"},
  {id: 7, reference: "TX-02", amount: 168, day: 8, category: "food"},
  {id: 8, reference: "TX-07", amount: -169, day: 18, category: "travel"}
];

test("with \"food\"", () => {
  expect(countTransactionsByCategory(TRANSACTIONS, "food")).toEqual(5);
});

test("with \"rent\"", () => {
  expect(countTransactionsByCategory(TRANSACTIONS, "rent")).toEqual(1);
});

test("with \"salary\"", () => {
  expect(countTransactionsByCategory(TRANSACTIONS, "salary")).toEqual(0);
});

test("with \"nope\"", () => {
  expect(countTransactionsByCategory(TRANSACTIONS, "nope")).toEqual(0);
});
