const PRODUCTS = [
  {id: 1, name: "Headphones", price: 4, stock: 56, category: "home", onSale: true},
  {id: 2, name: "Water Bottle", price: 97, stock: 25, category: "tech", onSale: false},
  {id: 3, name: "Monitor Arm", price: 58, stock: 27, category: "tech", onSale: true},
  {id: 4, name: "Backpack", price: 62, stock: 43, category: "home", onSale: false},
  {id: 5, name: "Plant Pot", price: 37, stock: 12, category: "home", onSale: false},
  {id: 6, name: "Desk Lamp", price: 100, stock: 30, category: "office", onSale: true},
  {id: 7, name: "Webcam", price: 50, stock: 4, category: "office", onSale: true},
  {id: 8, name: "Mouse Pad", price: 6, stock: 59, category: "home", onSale: true}
];

test("with 37, 58", () => {
  expect(productsInRange(PRODUCTS, 37, 58)).toEqual(["Monitor Arm","Plant Pot","Webcam"]);
});

test("with 58, 62", () => {
  expect(productsInRange(PRODUCTS, 58, 62)).toEqual(["Monitor Arm","Backpack"]);
});

test("with 37, 37", () => {
  expect(productsInRange(PRODUCTS, 37, 37)).toEqual(["Plant Pot"]);
});
