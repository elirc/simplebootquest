test("an empty list", () => {
  expect(averagePrice([])).toEqual(null);
});

test("all products", () => {
  expect(averagePrice(PRODUCTS)).toEqual(45.3);
});
