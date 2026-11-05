const PRODUCTS = [
  {id: 1, name: "Mouse Pad", price: 120, stock: 2, category: "home", onSale: true},
  {id: 2, name: "Notebook", price: 99, stock: 26, category: "tech", onSale: true},
  {id: 3, name: "Backpack", price: 107, stock: 27, category: "office", onSale: true},
  {id: 4, name: "Headphones", price: 17, stock: 11, category: "office", onSale: false},
  {id: 5, name: "Coffee Mug", price: 37, stock: 19, category: "home", onSale: false},
  {id: 6, name: "Water Bottle", price: 44, stock: 44, category: "office", onSale: true},
  {id: 7, name: "Monitor Arm", price: 47, stock: 37, category: "tech", onSale: true},
  {id: 8, name: "Plant Pot", price: 65, stock: 26, category: "home", onSale: false}
];

test("with \"office\"", () => {
  expect(countProductsByCategory(PRODUCTS, "office")).toEqual(3);
});

test("with \"tech\"", () => {
  expect(countProductsByCategory(PRODUCTS, "tech")).toEqual(2);
});

test("with \"home\"", () => {
  expect(countProductsByCategory(PRODUCTS, "home")).toEqual(3);
});

test("with \"nope\"", () => {
  expect(countProductsByCategory(PRODUCTS, "nope")).toEqual(0);
});
