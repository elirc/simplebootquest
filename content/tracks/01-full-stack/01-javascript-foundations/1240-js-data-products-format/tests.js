const PRODUCTS = [
  {id: 1, name: "Notebook", price: 11, stock: 11, category: "office", onSale: true},
  {id: 2, name: "Webcam", price: 50, stock: 1, category: "tech", onSale: false},
  {id: 3, name: "Monitor Arm", price: 8, stock: 52, category: "home", onSale: false},
  {id: 4, name: "Pen Set", price: 59, stock: 57, category: "home", onSale: false},
  {id: 5, name: "Plant Pot", price: 99, stock: 30, category: "office", onSale: false},
  {id: 6, name: "USB Hub", price: 67, stock: 18, category: "home", onSale: false},
  {id: 7, name: "Headphones", price: 81, stock: 50, category: "office", onSale: false},
  {id: 8, name: "Desk Lamp", price: 26, stock: 32, category: "tech", onSale: true}
];

test("an empty list", () => {
  expect(describeProducts([])).toEqual([]);
});

test("all products", () => {
  expect(describeProducts(PRODUCTS)).toEqual(["Notebook (11)","Webcam (1)","Monitor Arm (52)","Pen Set (57)","Plant Pot (30)","USB Hub (18)","Headphones (50)","Desk Lamp (32)"]);
});
