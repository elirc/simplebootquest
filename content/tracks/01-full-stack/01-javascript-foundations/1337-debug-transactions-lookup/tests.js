const TRANSACTIONS = [
  {id: 1, reference: "TX-02", amount: -371, day: 21, category: "food"},
  {id: 2, reference: "TX-01", amount: 64, day: 8, category: "food"},
  {id: 3, reference: "TX-07", amount: -40, day: 3, category: "salary"},
  {id: 4, reference: "TX-10", amount: 871, day: 27, category: "rent"},
  {id: 5, reference: "TX-08", amount: -274, day: 4, category: "travel"},
  {id: 6, reference: "TX-05", amount: 1168, day: 10, category: "rent"},
  {id: 7, reference: "TX-09", amount: 1102, day: 2, category: "travel"},
  {id: 8, reference: "TX-04", amount: -295, day: 4, category: "food"}
];

test("with \"TX-01\"", () => {
  expect(amountOf(TRANSACTIONS, "TX-01")).toEqual(64);
});

test("with \"Nope\"", () => {
  expect(amountOf(TRANSACTIONS, "Nope")).toEqual(null);
});
