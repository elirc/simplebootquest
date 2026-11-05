const BEFORE = [
  {id: 1, name: "USB Hub", price: 28, stock: 18, category: "home", onSale: false},
  {id: 2, name: "Notebook", price: 6, stock: 44, category: "office", onSale: true},
  {id: 3, name: "Mouse Pad", price: 46, stock: 59, category: "tech", onSale: true},
  {id: 4, name: "Webcam", price: 53, stock: 24, category: "home", onSale: true},
  {id: 5, name: "Pen Set", price: 84, stock: 4, category: "tech", onSale: false},
  {id: 6, name: "Backpack", price: 97, stock: 34, category: "office", onSale: true},
  {id: 7, name: "Desk Lamp", price: 112, stock: 41, category: "tech", onSale: false},
  {id: 8, name: "Coffee Mug", price: 117, stock: 11, category: "office", onSale: false}
];
const AFTER = [
  {id: 1, name: "USB Hub", price: 28, stock: 18, category: "home", onSale: false},
  {id: 2, name: "Notebook", price: 13, stock: 44, category: "office", onSale: true},
  {id: 3, name: "Mouse Pad", price: 46, stock: 59, category: "tech", onSale: true},
  {id: 4, name: "Webcam", price: 53, stock: 24, category: "home", onSale: true},
  {id: 5, name: "Pen Set", price: 91, stock: 4, category: "tech", onSale: false},
  {id: 6, name: "Backpack", price: 97, stock: 34, category: "office", onSale: true},
  {id: 7, name: "Desk Lamp", price: 112, stock: 41, category: "tech", onSale: false},
  {id: 8, name: "Coffee Mug", price: 124, stock: 11, category: "office", onSale: false}
];

test("finds changed ids", () => {
  expect(priceChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(priceChanges(BEFORE, BEFORE)).toEqual([]);
});
