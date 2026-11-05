const PRODUCTS = [
  {id: 1, name: "Headphones", price: 70, stock: 36, category: "home", onSale: true},
  {id: 2, name: "USB Hub", price: 36, stock: 51, category: "home", onSale: false},
  {id: 3, name: "Notebook", price: 4, stock: 12, category: "tech", onSale: false},
  {id: 4, name: "Webcam", price: 22, stock: 7, category: "office", onSale: true},
  {id: 5, name: "Mouse Pad", price: 104, stock: 44, category: "tech", onSale: true},
  {id: 6, name: "Pen Set", price: 73, stock: 25, category: "home", onSale: false},
  {id: 7, name: "Water Bottle", price: 81, stock: 49, category: "home", onSale: true},
  {id: 8, name: "Desk Lamp", price: 64, stock: 32, category: "home", onSale: false}
];

test("with 1", () => {
  expect(nthByStock(PRODUCTS, 1)).toEqual("USB Hub");
});

test("with 2", () => {
  expect(nthByStock(PRODUCTS, 2)).toEqual("Water Bottle");
});

test("with 5", () => {
  expect(nthByStock(PRODUCTS, 5)).toEqual("Desk Lamp");
});

test("with 0", () => {
  expect(nthByStock(PRODUCTS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByStock(PRODUCTS, 99)).toEqual(null);
});
