const TRANSACTIONS = [
  {id: 1, reference: "TX-04", amount: -359, day: 19, category: "food"},
  {id: 2, reference: "TX-09", amount: -70, day: 5, category: "rent"},
  {id: 3, reference: "TX-01", amount: -7, day: 19, category: "salary"},
  {id: 4, reference: "TX-06", amount: -112, day: 3, category: "food"},
  {id: 5, reference: "TX-11", amount: 659, day: 7, category: "salary"},
  {id: 6, reference: "TX-02", amount: 169, day: 12, category: "salary"},
  {id: 7, reference: "TX-05", amount: 786, day: 8, category: "fun"},
  {id: 8, reference: "TX-08", amount: 592, day: 26, category: "food"}
];

test("an empty list", () => {
  expect(totalAmount([])).toEqual(0);
});

test("all transactions", () => {
  expect(totalAmount(TRANSACTIONS)).toEqual(1658);
});
