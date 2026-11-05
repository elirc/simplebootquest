test("an empty list", () => {
  expect(averageAmount([])).toEqual(null);
});

test("all transactions", () => {
  expect(averageAmount(TRANSACTIONS)).toEqual(640.3);
});
