test("with \"food\"", () => {
  expect(transactionsInCategoryRanked(TRANSACTIONS, "food")).toEqual(["TX-06","TX-12"]);
});

test("with \"rent\"", () => {
  expect(transactionsInCategoryRanked(TRANSACTIONS, "rent")).toEqual([]);
});

test("with \"salary\"", () => {
  expect(transactionsInCategoryRanked(TRANSACTIONS, "salary")).toEqual(["TX-01","TX-03","TX-08"]);
});
