const TRANSACTIONS = [
  {id: 1, reference: "TX-06", amount: 762, day: 10, category: "travel"},
  {id: 2, reference: "TX-12", amount: 880, day: 28, category: "fun"},
  {id: 3, reference: "TX-07", amount: 1045, day: 19, category: "food"},
  {id: 4, reference: "TX-04", amount: 789, day: 20, category: "fun"},
  {id: 5, reference: "TX-09", amount: 1113, day: 2, category: "rent"},
  {id: 6, reference: "TX-10", amount: -232, day: 22, category: "travel"},
  {id: 7, reference: "TX-01", amount: 474, day: 5, category: "salary"},
  {id: 8, reference: "TX-05", amount: 585, day: 19, category: "salary"}
];

test("an empty list", () => {
  expect(averageAmount([])).toEqual(null);
});

test("all transactions", () => {
  expect(averageAmount(TRANSACTIONS)).toEqual(677);
});
