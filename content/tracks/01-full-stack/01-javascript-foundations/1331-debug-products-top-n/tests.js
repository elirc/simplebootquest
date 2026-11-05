const PRODUCTS = [
  {id: 1, name: "Webcam", price: 32, stock: 20, category: "tech", onSale: true},
  {id: 2, name: "Desk Lamp", price: 48, stock: 6, category: "tech", onSale: false},
  {id: 3, name: "Monitor Arm", price: 42, stock: 49, category: "tech", onSale: true},
  {id: 4, name: "Headphones", price: 18, stock: 57, category: "home", onSale: false},
  {id: 5, name: "USB Hub", price: 11, stock: 2, category: "tech", onSale: true},
  {id: 6, name: "Water Bottle", price: 76, stock: 11, category: "home", onSale: true},
  {id: 7, name: "Notebook", price: 49, stock: 23, category: "home", onSale: false},
  {id: 8, name: "Backpack", price: 119, stock: 48, category: "tech", onSale: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(PRODUCTS);
  topProductsByStock(PRODUCTS, 1);
  expect(JSON.stringify(PRODUCTS)).toBe(before);
});

test("with 1", () => {
  expect(topProductsByStock(PRODUCTS, 1)).toEqual(["Headphones"]);
});

test("with 3", () => {
  expect(topProductsByStock(PRODUCTS, 3)).toEqual(["Headphones","Monitor Arm","Backpack"]);
});

test("with 0", () => {
  expect(topProductsByStock(PRODUCTS, 0)).toEqual([]);
});
