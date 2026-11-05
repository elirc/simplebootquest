const PRODUCTS = [
  {id: 1, name: "Notebook", price: 27, stock: 2, category: "tech", onSale: false},
  {id: 2, name: "Pen Set", price: 46, stock: 26, category: "home", onSale: false},
  {id: 3, name: "Coffee Mug", price: 111, stock: 52, category: "office", onSale: false},
  {id: 4, name: "Headphones", price: 98, stock: 22, category: "office", onSale: false},
  {id: 5, name: "Backpack", price: 29, stock: 55, category: "tech", onSale: false},
  {id: 6, name: "USB Hub", price: 57, stock: 57, category: "tech", onSale: true},
  {id: 7, name: "Water Bottle", price: 115, stock: 25, category: "home", onSale: true},
  {id: 8, name: "Desk Lamp", price: 70, stock: 23, category: "home", onSale: false}
];

test("an empty list", () => {
  expect(totalPrice([])).toEqual(0);
});

test("all products", () => {
  expect(totalPrice(PRODUCTS)).toEqual(553);
});
