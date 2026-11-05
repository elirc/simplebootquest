const PRODUCTS = [
  {id: 1, name: "Pen Set", price: 75, stock: 40, category: "tech", onSale: true},
  {id: 2, name: "Mouse Pad", price: 38, stock: 26, category: "office", onSale: false},
  {id: 3, name: "Notebook", price: 8, stock: 31, category: "home", onSale: false},
  {id: 4, name: "Coffee Mug", price: 19, stock: 46, category: "tech", onSale: true},
  {id: 5, name: "Backpack", price: 72, stock: 15, category: "tech", onSale: false},
  {id: 6, name: "Desk Lamp", price: 66, stock: 41, category: "office", onSale: true},
  {id: 7, name: "USB Hub", price: 75, stock: 51, category: "office", onSale: false},
  {id: 8, name: "Monitor Arm", price: 57, stock: 25, category: "office", onSale: true}
];

test("with \"Pen Set\"", () => {
  expect(stockOf(PRODUCTS, "Pen Set")).toEqual(40);
});

test("with \"Nope\"", () => {
  expect(stockOf(PRODUCTS, "Nope")).toEqual(null);
});
