test('does not mutate the input', () => {
  const before = JSON.stringify(PRODUCTS);
  topProductsByStock(PRODUCTS, 1);
  expect(JSON.stringify(PRODUCTS)).toBe(before);
});

test("with 1", () => {
  expect(topProductsByStock(PRODUCTS, 1)).toEqual(["Backpack"]);
});

test("with 3", () => {
  expect(topProductsByStock(PRODUCTS, 3)).toEqual(["Backpack","Desk Lamp","Headphones"]);
});

test("with 0", () => {
  expect(topProductsByStock(PRODUCTS, 0)).toEqual([]);
});
