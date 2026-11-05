const PRODUCTS = [
  {id: 1, name: "Headphones", price: 110, stock: 47, category: "office", onSale: false},
  {id: 2, name: "Backpack", price: 118, stock: 51, category: "office", onSale: false},
  {id: 3, name: "Monitor Arm", price: 63, stock: 5, category: "tech", onSale: false},
  {id: 4, name: "Plant Pot", price: 99, stock: 57, category: "office", onSale: false},
  {id: 5, name: "Webcam", price: 106, stock: 49, category: "home", onSale: false},
  {id: 6, name: "Coffee Mug", price: 49, stock: 59, category: "home", onSale: false},
  {id: 7, name: "Desk Lamp", price: 56, stock: 15, category: "home", onSale: false},
  {id: 8, name: "Water Bottle", price: 79, stock: 46, category: "home", onSale: true}
];

test("an empty list", () => {
  expect(lowestPrice([])).toEqual(null);
});

test("all products", () => {
  expect(lowestPrice(PRODUCTS)).toEqual("Coffee Mug");
});
