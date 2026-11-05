const TRANSACTIONS = [
  {id: 1, reference: "TX-03", amount: 958, day: 5, category: "food"},
  {id: 2, reference: "TX-08", amount: 4, day: 13, category: "travel"},
  {id: 3, reference: "TX-09", amount: -2, day: 19, category: "fun"},
  {id: 4, reference: "TX-06", amount: 390, day: 15, category: "salary"},
  {id: 5, reference: "TX-01", amount: 55, day: 14, category: "travel"},
  {id: 6, reference: "TX-04", amount: 1078, day: 25, category: "fun"},
  {id: 7, reference: "TX-02", amount: -45, day: 5, category: "food"},
  {id: 8, reference: "TX-10", amount: -387, day: 15, category: "food"}
];

test("an empty list", () => {
  expect(totalDay([])).toEqual(0);
});

test("all transactions", () => {
  expect(totalDay(TRANSACTIONS)).toEqual(111);
});
