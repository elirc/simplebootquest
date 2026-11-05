const PRODUCTS = [
  {id: 1, name: "Mouse Pad", price: 82, stock: 29, category: "office", onSale: false},
  {id: 2, name: "Water Bottle", price: 14, stock: 40, category: "office", onSale: false},
  {id: 3, name: "Desk Lamp", price: 26, stock: 33, category: "office", onSale: true},
  {id: 4, name: "Coffee Mug", price: 6, stock: 14, category: "tech", onSale: false},
  {id: 5, name: "USB Hub", price: 83, stock: 57, category: "home", onSale: true},
  {id: 6, name: "Headphones", price: 30, stock: 12, category: "tech", onSale: false},
  {id: 7, name: "Plant Pot", price: 105, stock: 48, category: "home", onSale: true},
  {id: 8, name: "Notebook", price: 23, stock: 53, category: "home", onSale: false}
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
