test("with 1", () => {
  expect(nthByPrice(PRODUCTS, 1)).toEqual("Headphones");
});

test("with 2", () => {
  expect(nthByPrice(PRODUCTS, 2)).toEqual("Water Bottle");
});

test("with 5", () => {
  expect(nthByPrice(PRODUCTS, 5)).toEqual("Coffee Mug");
});

test("with 0", () => {
  expect(nthByPrice(PRODUCTS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByPrice(PRODUCTS, 99)).toEqual(null);
});
