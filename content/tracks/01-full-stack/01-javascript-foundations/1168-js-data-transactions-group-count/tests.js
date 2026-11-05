const TRANSACTIONS = [
  {id: 1, reference: "TX-07", amount: 396, day: 3, category: "fun"},
  {id: 2, reference: "TX-08", amount: 458, day: 17, category: "fun"},
  {id: 3, reference: "TX-05", amount: 929, day: 21, category: "salary"},
  {id: 4, reference: "TX-11", amount: 538, day: 12, category: "rent"},
  {id: 5, reference: "TX-09", amount: 606, day: 3, category: "fun"},
  {id: 6, reference: "TX-06", amount: 469, day: 26, category: "fun"},
  {id: 7, reference: "TX-04", amount: 413, day: 12, category: "rent"},
  {id: 8, reference: "TX-03", amount: 39, day: 28, category: "food"}
];

test("an empty list", () => {
  expect(countTransactionsPerCategory([])).toEqual({});
});

test("all transactions", () => {
  expect(countTransactionsPerCategory(TRANSACTIONS)).toEqual({"fun":4,"salary":1,"rent":2,"food":1});
});
