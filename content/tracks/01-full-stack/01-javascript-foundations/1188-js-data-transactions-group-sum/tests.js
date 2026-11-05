const TRANSACTIONS = [
  {id: 1, reference: "TX-05", amount: 295, day: 12, category: "travel"},
  {id: 2, reference: "TX-10", amount: 54, day: 11, category: "food"},
  {id: 3, reference: "TX-02", amount: -260, day: 16, category: "travel"},
  {id: 4, reference: "TX-11", amount: -90, day: 12, category: "rent"},
  {id: 5, reference: "TX-07", amount: 298, day: 21, category: "food"},
  {id: 6, reference: "TX-09", amount: 1142, day: 2, category: "food"},
  {id: 7, reference: "TX-12", amount: 575, day: 15, category: "fun"},
  {id: 8, reference: "TX-06", amount: 1084, day: 25, category: "travel"}
];

test("an empty list", () => {
  expect(amountPerCategory([])).toEqual({});
});

test("all transactions", () => {
  expect(amountPerCategory(TRANSACTIONS)).toEqual({"travel":1119,"food":1494,"rent":-90,"fun":575});
});
