const PRODUCTS = [
  {id: 1, name: "Monitor Arm", price: 12, stock: 33, category: "tech", onSale: false},
  {id: 2, name: "Coffee Mug", price: 58, stock: 21, category: "office", onSale: true},
  {id: 3, name: "USB Hub", price: 30, stock: 52, category: "tech", onSale: true},
  {id: 4, name: "Pen Set", price: 27, stock: 20, category: "tech", onSale: true},
  {id: 5, name: "Headphones", price: 71, stock: 37, category: "office", onSale: false},
  {id: 6, name: "Desk Lamp", price: 58, stock: 55, category: "home", onSale: true},
  {id: 7, name: "Water Bottle", price: 113, stock: 7, category: "home", onSale: false},
  {id: 8, name: "Plant Pot", price: 54, stock: 28, category: "tech", onSale: false}
];

test("with 21", () => {
  expect(allProductsUnder(PRODUCTS, 21)).toEqual(false);
});

test("with 56", () => {
  expect(allProductsUnder(PRODUCTS, 56)).toEqual(true);
});

test("with 55", () => {
  expect(allProductsUnder(PRODUCTS, 55)).toEqual(false);
});
