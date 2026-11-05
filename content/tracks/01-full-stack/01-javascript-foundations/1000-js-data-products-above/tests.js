const PRODUCTS = [
  {id: 1, name: "Pen Set", price: 79, stock: 43, category: "home", onSale: false},
  {id: 2, name: "USB Hub", price: 29, stock: 55, category: "office", onSale: false},
  {id: 3, name: "Plant Pot", price: 104, stock: 56, category: "home", onSale: false},
  {id: 4, name: "Headphones", price: 67, stock: 52, category: "tech", onSale: true},
  {id: 5, name: "Water Bottle", price: 10, stock: 19, category: "office", onSale: false},
  {id: 6, name: "Mouse Pad", price: 94, stock: 15, category: "home", onSale: false},
  {id: 7, name: "Monitor Arm", price: 114, stock: 25, category: "tech", onSale: true},
  {id: 8, name: "Coffee Mug", price: 34, stock: 43, category: "home", onSale: false}
];

test("with 25", () => {
  expect(productsAbove(PRODUCTS, 25)).toEqual(["Pen Set","USB Hub","Plant Pot","Headphones","Coffee Mug"]);
});

test("with 43", () => {
  expect(productsAbove(PRODUCTS, 43)).toEqual(["USB Hub","Plant Pot","Headphones"]);
});

test("with 999999", () => {
  expect(productsAbove(PRODUCTS, 999999)).toEqual([]);
});
