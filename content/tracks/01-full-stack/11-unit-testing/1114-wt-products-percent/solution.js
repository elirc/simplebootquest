test("an empty list", () => {
  expect(percentOnSale([])).toEqual(0);
});

test("all products", () => {
  expect(percentOnSale(PRODUCTS)).toEqual(50);
});
