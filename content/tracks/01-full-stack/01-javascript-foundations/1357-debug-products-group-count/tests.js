const PRODUCTS = [
  {id: 1, name: "Mouse Pad", price: 13, stock: 12, category: "tech", onSale: true},
  {id: 2, name: "Pen Set", price: 95, stock: 23, category: "tech", onSale: false},
  {id: 3, name: "Desk Lamp", price: 62, stock: 59, category: "tech", onSale: true},
  {id: 4, name: "Notebook", price: 99, stock: 32, category: "home", onSale: true},
  {id: 5, name: "Monitor Arm", price: 32, stock: 1, category: "home", onSale: false},
  {id: 6, name: "Backpack", price: 13, stock: 26, category: "home", onSale: false},
  {id: 7, name: "USB Hub", price: 32, stock: 32, category: "tech", onSale: false},
  {id: 8, name: "Water Bottle", price: 76, stock: 13, category: "office", onSale: true}
];

test("an empty list", () => {
  expect(countProductsPerCategory([])).toEqual({});
});

test("all products", () => {
  expect(countProductsPerCategory(PRODUCTS)).toEqual({"tech":4,"home":3,"office":1});
});
