const TRANSACTIONS = [
  {id: 1, reference: "TX-06", amount: 633, day: 14, category: "food"},
  {id: 2, reference: "TX-12", amount: 346, day: 5, category: "salary"},
  {id: 3, reference: "TX-10", amount: 675, day: 23, category: "fun"},
  {id: 4, reference: "TX-05", amount: 399, day: 9, category: "fun"},
  {id: 5, reference: "TX-02", amount: 1185, day: 12, category: "fun"},
  {id: 6, reference: "TX-01", amount: 449, day: 17, category: "food"},
  {id: 7, reference: "TX-11", amount: 620, day: 2, category: "food"},
  {id: 8, reference: "TX-09", amount: 817, day: 17, category: "fun"}
];

test("with \"TX-01\"", () => {
  expect(dayOf(TRANSACTIONS, "TX-01")).toEqual(17);
});

test("with \"Nope\"", () => {
  expect(dayOf(TRANSACTIONS, "Nope")).toEqual(null);
});
