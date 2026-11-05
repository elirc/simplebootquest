const PRODUCTS = [
  {id: 1, name: "USB Hub", price: 5, stock: 4, category: "home", onSale: true},
  {id: 2, name: "Pen Set", price: 68, stock: 59, category: "tech", onSale: false},
  {id: 3, name: "Plant Pot", price: 75, stock: 2, category: "home", onSale: true},
  {id: 4, name: "Headphones", price: 15, stock: 27, category: "home", onSale: false},
  {id: 5, name: "Desk Lamp", price: 58, stock: 24, category: "tech", onSale: false},
  {id: 6, name: "Coffee Mug", price: 12, stock: 22, category: "home", onSale: true},
  {id: 7, name: "Backpack", price: 68, stock: 41, category: "home", onSale: false},
  {id: 8, name: "Monitor Arm", price: 53, stock: 42, category: "tech", onSale: true}
];

test("with 22, 27", () => {
  expect(productsInRange(PRODUCTS, 22, 27)).toEqual(["Headphones","Desk Lamp","Coffee Mug"]);
});

test("with 27, 41", () => {
  expect(productsInRange(PRODUCTS, 27, 41)).toEqual(["Headphones","Backpack"]);
});

test("with 22, 22", () => {
  expect(productsInRange(PRODUCTS, 22, 22)).toEqual(["Coffee Mug"]);
});
