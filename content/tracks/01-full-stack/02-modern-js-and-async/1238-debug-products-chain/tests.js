const PRODUCTS = [
  {id: 1, name: "Notebook", price: 22, stock: 9, category: "office", onSale: false},
  {id: 2, name: "Backpack", price: 114, stock: 13, category: "tech", onSale: false},
  {id: 3, name: "Mouse Pad", price: 107, stock: 37, category: "office", onSale: true},
  {id: 4, name: "Water Bottle", price: 79, stock: 39, category: "office", onSale: false},
  {id: 5, name: "Plant Pot", price: 115, stock: 8, category: "office", onSale: true},
  {id: 6, name: "Desk Lamp", price: 58, stock: 40, category: "tech", onSale: true},
  {id: 7, name: "Webcam", price: 93, stock: 50, category: "office", onSale: false},
  {id: 8, name: "Pen Set", price: 90, stock: 32, category: "home", onSale: true}
];

test("with \"office\"", () => {
  expect(productsInCategoryRanked(PRODUCTS, "office")).toEqual(["Webcam","Water Bottle","Mouse Pad","Notebook","Plant Pot"]);
});

test("with \"tech\"", () => {
  expect(productsInCategoryRanked(PRODUCTS, "tech")).toEqual(["Desk Lamp","Backpack"]);
});

test("with \"home\"", () => {
  expect(productsInCategoryRanked(PRODUCTS, "home")).toEqual(["Pen Set"]);
});
