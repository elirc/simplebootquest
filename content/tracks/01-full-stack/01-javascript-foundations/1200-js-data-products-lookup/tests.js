const PRODUCTS = [
  {id: 1, name: "Notebook", price: 19, stock: 8, category: "home", onSale: false},
  {id: 2, name: "Headphones", price: 111, stock: 43, category: "tech", onSale: true},
  {id: 3, name: "Monitor Arm", price: 104, stock: 59, category: "tech", onSale: true},
  {id: 4, name: "USB Hub", price: 19, stock: 22, category: "home", onSale: false},
  {id: 5, name: "Webcam", price: 92, stock: 22, category: "tech", onSale: false},
  {id: 6, name: "Coffee Mug", price: 110, stock: 46, category: "office", onSale: true},
  {id: 7, name: "Pen Set", price: 93, stock: 59, category: "home", onSale: true},
  {id: 8, name: "Mouse Pad", price: 81, stock: 7, category: "tech", onSale: true}
];

test("with \"Notebook\"", () => {
  expect(stockOf(PRODUCTS, "Notebook")).toEqual(8);
});

test("with \"Nope\"", () => {
  expect(stockOf(PRODUCTS, "Nope")).toEqual(null);
});
