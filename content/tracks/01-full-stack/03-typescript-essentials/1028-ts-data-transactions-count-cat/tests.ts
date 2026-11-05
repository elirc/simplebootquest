const TRANSACTIONS = [
  {id: 1, reference: "TX-11", amount: 770, day: 9, category: "food"},
  {id: 2, reference: "TX-02", amount: 1172, day: 9, category: "fun"},
  {id: 3, reference: "TX-12", amount: 181, day: 23, category: "food"},
  {id: 4, reference: "TX-03", amount: -7, day: 10, category: "salary"},
  {id: 5, reference: "TX-04", amount: 647, day: 17, category: "rent"},
  {id: 6, reference: "TX-07", amount: -29, day: 15, category: "travel"},
  {id: 7, reference: "TX-09", amount: 857, day: 26, category: "food"},
  {id: 8, reference: "TX-06", amount: 443, day: 1, category: "rent"}
];

test("with \"food\"", () => {
  expect(countTransactionsByCategory(TRANSACTIONS, "food")).toEqual(3);
});

test("with \"rent\"", () => {
  expect(countTransactionsByCategory(TRANSACTIONS, "rent")).toEqual(2);
});

test("with \"salary\"", () => {
  expect(countTransactionsByCategory(TRANSACTIONS, "salary")).toEqual(1);
});

test("with \"nope\"", () => {
  expect(countTransactionsByCategory(TRANSACTIONS, "nope")).toEqual(0);
});
