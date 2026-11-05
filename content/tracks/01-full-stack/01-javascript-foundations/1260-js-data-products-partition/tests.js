const PRODUCTS = [
  {id: 1, name: "Mouse Pad", price: 78, stock: 38, category: "home", onSale: true},
  {id: 2, name: "Water Bottle", price: 119, stock: 15, category: "office", onSale: false},
  {id: 3, name: "Webcam", price: 37, stock: 60, category: "home", onSale: false},
  {id: 4, name: "Notebook", price: 74, stock: 20, category: "home", onSale: false},
  {id: 5, name: "Plant Pot", price: 115, stock: 20, category: "home", onSale: true},
  {id: 6, name: "Monitor Arm", price: 111, stock: 32, category: "tech", onSale: false},
  {id: 7, name: "USB Hub", price: 70, stock: 45, category: "home", onSale: true},
  {id: 8, name: "Desk Lamp", price: 51, stock: 50, category: "tech", onSale: false}
];

test("an empty list", () => {
  expect(splitProductsByOnSale([])).toEqual({"yes":[],"no":[]});
});

test("all products", () => {
  expect(splitProductsByOnSale(PRODUCTS)).toEqual({"yes":["Mouse Pad","Plant Pot","USB Hub"],"no":["Water Bottle","Webcam","Notebook","Monitor Arm","Desk Lamp"]});
});
