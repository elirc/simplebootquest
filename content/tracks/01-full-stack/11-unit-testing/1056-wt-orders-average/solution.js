test("an empty list", () => {
  expect(averageItems([])).toEqual(null);
});

test("all orders", () => {
  expect(averageItems(ORDERS)).toEqual(6.6);
});
