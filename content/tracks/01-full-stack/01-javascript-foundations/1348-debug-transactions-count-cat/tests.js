const TRANSACTIONS = [
  {id: 1, reference: "TX-07", amount: 591, day: 8, category: "rent"},
  {id: 2, reference: "TX-09", amount: 653, day: 12, category: "salary"},
  {id: 3, reference: "TX-05", amount: 1143, day: 7, category: "salary"},
  {id: 4, reference: "TX-11", amount: 725, day: 7, category: "travel"},
  {id: 5, reference: "TX-08", amount: 689, day: 15, category: "salary"},
  {id: 6, reference: "TX-02", amount: 573, day: 28, category: "rent"},
  {id: 7, reference: "TX-04", amount: 484, day: 18, category: "food"},
  {id: 8, reference: "TX-01", amount: 803, day: 6, category: "food"}
];

test("with \"food\"", () => {
  expect(countTransactionsByCategory(TRANSACTIONS, "food")).toEqual(2);
});

test("with \"rent\"", () => {
  expect(countTransactionsByCategory(TRANSACTIONS, "rent")).toEqual(2);
});

test("with \"salary\"", () => {
  expect(countTransactionsByCategory(TRANSACTIONS, "salary")).toEqual(3);
});

test("with \"nope\"", () => {
  expect(countTransactionsByCategory(TRANSACTIONS, "nope")).toEqual(0);
});
