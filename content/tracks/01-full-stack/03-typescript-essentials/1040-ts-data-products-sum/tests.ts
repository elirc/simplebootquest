const PRODUCTS = [
  {id: 1, name: "Notebook", price: 72, stock: 39, category: "office", onSale: false},
  {id: 2, name: "Backpack", price: 10, stock: 43, category: "office", onSale: true},
  {id: 3, name: "USB Hub", price: 104, stock: 37, category: "office", onSale: true},
  {id: 4, name: "Desk Lamp", price: 64, stock: 23, category: "office", onSale: false},
  {id: 5, name: "Pen Set", price: 70, stock: 11, category: "office", onSale: false},
  {id: 6, name: "Headphones", price: 55, stock: 44, category: "office", onSale: false},
  {id: 7, name: "Webcam", price: 49, stock: 43, category: "home", onSale: false},
  {id: 8, name: "Monitor Arm", price: 100, stock: 58, category: "tech", onSale: true}
];

test("an empty list", () => {
  expect(totalPrice([])).toEqual(0);
});

test("all products", () => {
  expect(totalPrice(PRODUCTS)).toEqual(524);
});
