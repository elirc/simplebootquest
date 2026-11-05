const PRODUCTS = [
  {id: 1, name: "Backpack", price: 117, stock: 49, category: "home", onSale: false},
  {id: 2, name: "Water Bottle", price: 40, stock: 3, category: "tech", onSale: true},
  {id: 3, name: "Webcam", price: 54, stock: 33, category: "tech", onSale: false},
  {id: 4, name: "Headphones", price: 102, stock: 17, category: "tech", onSale: false},
  {id: 5, name: "Monitor Arm", price: 94, stock: 59, category: "tech", onSale: true},
  {id: 6, name: "Notebook", price: 78, stock: 31, category: "office", onSale: false},
  {id: 7, name: "Coffee Mug", price: 85, stock: 51, category: "tech", onSale: false},
  {id: 8, name: "Mouse Pad", price: 42, stock: 59, category: "office", onSale: false}
];

test("with \"office\"", () => {
  expect(countProductsByCategory(PRODUCTS, "office")).toEqual(2);
});

test("with \"tech\"", () => {
  expect(countProductsByCategory(PRODUCTS, "tech")).toEqual(5);
});

test("with \"home\"", () => {
  expect(countProductsByCategory(PRODUCTS, "home")).toEqual(1);
});

test("with \"nope\"", () => {
  expect(countProductsByCategory(PRODUCTS, "nope")).toEqual(0);
});
