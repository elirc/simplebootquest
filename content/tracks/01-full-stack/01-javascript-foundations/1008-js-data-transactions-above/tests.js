const TRANSACTIONS = [
  {id: 1, reference: "TX-06", amount: 207, day: 25, category: "rent"},
  {id: 2, reference: "TX-10", amount: -89, day: 1, category: "food"},
  {id: 3, reference: "TX-11", amount: 799, day: 1, category: "salary"},
  {id: 4, reference: "TX-02", amount: 432, day: 12, category: "rent"},
  {id: 5, reference: "TX-03", amount: 566, day: 6, category: "food"},
  {id: 6, reference: "TX-04", amount: 619, day: 5, category: "food"},
  {id: 7, reference: "TX-01", amount: 1068, day: 10, category: "salary"},
  {id: 8, reference: "TX-12", amount: 337, day: 18, category: "travel"}
];

test("with 337", () => {
  expect(transactionsAbove(TRANSACTIONS, 337)).toEqual(["TX-11","TX-02","TX-03","TX-04","TX-01"]);
});

test("with 566", () => {
  expect(transactionsAbove(TRANSACTIONS, 566)).toEqual(["TX-11","TX-04","TX-01"]);
});

test("with 999999", () => {
  expect(transactionsAbove(TRANSACTIONS, 999999)).toEqual([]);
});
