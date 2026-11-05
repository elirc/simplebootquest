test("with \"office\"", () => {
  expect(productsInCategoryRanked(PRODUCTS, "office")).toEqual(["Monitor Arm","Backpack","Webcam","Pen Set"]);
});

test("with \"tech\"", () => {
  expect(productsInCategoryRanked(PRODUCTS, "tech")).toEqual(["Coffee Mug","USB Hub","Notebook"]);
});

test("with \"home\"", () => {
  expect(productsInCategoryRanked(PRODUCTS, "home")).toEqual(["Plant Pot"]);
});
