test("with \"of\"", () => {
  expect(searchProducts(PRODUCTS, "of")).toEqual(["Coffee Mug"]);
});

test("with \"OF\"", () => {
  expect(searchProducts(PRODUCTS, "OF")).toEqual(["Coffee Mug"]);
});

test("with \"  \"", () => {
  expect(searchProducts(PRODUCTS, "  ")).toEqual(["Pen Set","Mouse Pad","Backpack","Coffee Mug","Water Bottle","Monitor Arm","Plant Pot","Headphones"]);
});

test("with \"zzz\"", () => {
  expect(searchProducts(PRODUCTS, "zzz")).toEqual([]);
});
