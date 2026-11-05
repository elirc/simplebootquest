const TRANSACTIONS = [
  {id: 1, reference: "TX-07", amount: 389, day: 24, category: "rent"},
  {id: 2, reference: "TX-01", amount: 779, day: 21, category: "food"},
  {id: 3, reference: "TX-10", amount: 139, day: 9, category: "rent"},
  {id: 4, reference: "TX-05", amount: 548, day: 27, category: "food"},
  {id: 5, reference: "TX-11", amount: 356, day: 11, category: "salary"},
  {id: 6, reference: "TX-09", amount: 422, day: 16, category: "food"},
  {id: 7, reference: "TX-12", amount: 22, day: 12, category: "rent"},
  {id: 8, reference: "TX-03", amount: 532, day: 5, category: "fun"}
];

test("an empty list", () => {
  expect(countTransactionsPerCategory([])).toEqual({});
});

test("all transactions", () => {
  expect(countTransactionsPerCategory(TRANSACTIONS)).toEqual({"rent":3,"food":3,"salary":1,"fun":1});
});
