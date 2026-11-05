const PRODUCTS = [
  {id: 1, name: "Mouse Pad", price: 74, stock: 34, category: "tech", onSale: false},
  {id: 2, name: "Coffee Mug", price: 116, stock: 33, category: "tech", onSale: false},
  {id: 3, name: "Headphones", price: 41, stock: 15, category: "tech", onSale: true},
  {id: 4, name: "Desk Lamp", price: 42, stock: 15, category: "home", onSale: false},
  {id: 5, name: "Monitor Arm", price: 102, stock: 25, category: "home", onSale: true},
  {id: 6, name: "Water Bottle", price: 116, stock: 39, category: "office", onSale: true},
  {id: 7, name: "Plant Pot", price: 72, stock: 44, category: "tech", onSale: false},
  {id: 8, name: "USB Hub", price: 96, stock: 1, category: "home", onSale: false}
];

test("with 15, 33", () => {
  expect(productsInRange(PRODUCTS, 15, 33)).toEqual(["Coffee Mug","Headphones","Desk Lamp","Monitor Arm"]);
});

test("with 33, 34", () => {
  expect(productsInRange(PRODUCTS, 33, 34)).toEqual(["Mouse Pad","Coffee Mug"]);
});

test("with 15, 15", () => {
  expect(productsInRange(PRODUCTS, 15, 15)).toEqual(["Headphones","Desk Lamp"]);
});
