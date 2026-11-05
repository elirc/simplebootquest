const TRANSACTIONS = [
  {id: 1, reference: "TX-02", amount: 280, day: 14, category: "food"},
  {id: 2, reference: "TX-09", amount: -228, day: 17, category: "fun"},
  {id: 3, reference: "TX-04", amount: -103, day: 3, category: "fun"},
  {id: 4, reference: "TX-06", amount: 672, day: 27, category: "fun"},
  {id: 5, reference: "TX-11", amount: 638, day: 1, category: "fun"},
  {id: 6, reference: "TX-10", amount: -87, day: 3, category: "rent"},
  {id: 7, reference: "TX-08", amount: 154, day: 3, category: "salary"},
  {id: 8, reference: "TX-12", amount: 62, day: 13, category: "salary"}
];

test("an empty list", () => {
  expect(distinctCategorys([])).toEqual([]);
});

test("all transactions", () => {
  expect(distinctCategorys(TRANSACTIONS)).toEqual(["food","fun","rent","salary"]);
});
