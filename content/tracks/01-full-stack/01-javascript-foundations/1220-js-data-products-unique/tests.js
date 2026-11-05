const PRODUCTS = [
  {id: 1, name: "Coffee Mug", price: 9, stock: 36, category: "tech", onSale: true},
  {id: 2, name: "Monitor Arm", price: 108, stock: 56, category: "home", onSale: false},
  {id: 3, name: "Pen Set", price: 79, stock: 43, category: "home", onSale: false},
  {id: 4, name: "Backpack", price: 117, stock: 59, category: "tech", onSale: false},
  {id: 5, name: "Notebook", price: 33, stock: 46, category: "home", onSale: true},
  {id: 6, name: "Mouse Pad", price: 97, stock: 57, category: "office", onSale: true},
  {id: 7, name: "Water Bottle", price: 16, stock: 37, category: "office", onSale: false},
  {id: 8, name: "USB Hub", price: 16, stock: 35, category: "office", onSale: true}
];

test("an empty list", () => {
  expect(distinctCategorys([])).toEqual([]);
});

test("all products", () => {
  expect(distinctCategorys(PRODUCTS)).toEqual(["home","office","tech"]);
});
