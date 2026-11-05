const PRODUCTS = [
  {id: 1, name: "Webcam", price: 23, stock: 39, category: "home", onSale: false},
  {id: 2, name: "Headphones", price: 74, stock: 24, category: "office", onSale: false},
  {id: 3, name: "Desk Lamp", price: 68, stock: 18, category: "tech", onSale: true},
  {id: 4, name: "Mouse Pad", price: 23, stock: 49, category: "home", onSale: true},
  {id: 5, name: "Plant Pot", price: 47, stock: 3, category: "tech", onSale: false},
  {id: 6, name: "Notebook", price: 101, stock: 39, category: "tech", onSale: true},
  {id: 7, name: "Monitor Arm", price: 62, stock: 32, category: "tech", onSale: true},
  {id: 8, name: "Water Bottle", price: 9, stock: 6, category: "home", onSale: false}
];

test("with \"office\"", () => {
  expect(productsInCategoryRanked(PRODUCTS, "office")).toEqual(["Headphones"]);
});

test("with \"tech\"", () => {
  expect(productsInCategoryRanked(PRODUCTS, "tech")).toEqual(["Notebook","Monitor Arm","Desk Lamp","Plant Pot"]);
});

test("with \"home\"", () => {
  expect(productsInCategoryRanked(PRODUCTS, "home")).toEqual(["Mouse Pad","Webcam","Water Bottle"]);
});
