const TRANSACTIONS = [
  {id: 1, reference: "TX-01", amount: -104, day: 12, category: "fun"},
  {id: 2, reference: "TX-04", amount: 1181, day: 28, category: "travel"},
  {id: 3, reference: "TX-10", amount: 323, day: 10, category: "food"},
  {id: 4, reference: "TX-12", amount: 748, day: 20, category: "fun"},
  {id: 5, reference: "TX-09", amount: 685, day: 8, category: "salary"},
  {id: 6, reference: "TX-11", amount: -29, day: 15, category: "salary"},
  {id: 7, reference: "TX-02", amount: 615, day: 3, category: "travel"},
  {id: 8, reference: "TX-06", amount: 135, day: 10, category: "salary"}
];

test("with \"food\"", () => {
  expect(transactionsInCategoryRanked(TRANSACTIONS, "food")).toEqual(["TX-10"]);
});

test("with \"rent\"", () => {
  expect(transactionsInCategoryRanked(TRANSACTIONS, "rent")).toEqual([]);
});

test("with \"salary\"", () => {
  expect(transactionsInCategoryRanked(TRANSACTIONS, "salary")).toEqual(["TX-11","TX-06","TX-09"]);
});
