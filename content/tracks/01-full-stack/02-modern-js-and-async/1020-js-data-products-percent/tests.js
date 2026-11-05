const PRODUCTS = [
  {id: 1, name: "Coffee Mug", price: 89, stock: 29, category: "office", onSale: true},
  {id: 2, name: "Desk Lamp", price: 91, stock: 6, category: "home", onSale: false},
  {id: 3, name: "Water Bottle", price: 21, stock: 18, category: "office", onSale: false},
  {id: 4, name: "Monitor Arm", price: 67, stock: 37, category: "office", onSale: true},
  {id: 5, name: "Backpack", price: 40, stock: 43, category: "office", onSale: true},
  {id: 6, name: "Plant Pot", price: 28, stock: 39, category: "home", onSale: true},
  {id: 7, name: "Mouse Pad", price: 58, stock: 27, category: "tech", onSale: false},
  {id: 8, name: "Pen Set", price: 106, stock: 46, category: "office", onSale: false}
];

test("an empty list", () => {
  expect(percentOnSale([])).toEqual(0);
});

test("all products", () => {
  expect(percentOnSale(PRODUCTS)).toEqual(50);
});
