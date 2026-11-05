const PRODUCTS = [
  {id: 1, name: "Water Bottle", price: 42, stock: 22, category: "home", onSale: true},
  {id: 2, name: "Desk Lamp", price: 99, stock: 59, category: "tech", onSale: true},
  {id: 3, name: "Mouse Pad", price: 102, stock: 20, category: "tech", onSale: true},
  {id: 4, name: "Monitor Arm", price: 12, stock: 59, category: "tech", onSale: true},
  {id: 5, name: "Webcam", price: 105, stock: 23, category: "office", onSale: true},
  {id: 6, name: "Coffee Mug", price: 41, stock: 54, category: "home", onSale: true},
  {id: 7, name: "Plant Pot", price: 91, stock: 37, category: "office", onSale: false},
  {id: 8, name: "Headphones", price: 29, stock: 23, category: "home", onSale: true}
];

function productsByPrice(products) {
  return [...products].sort((a, b) => a.price - b.price).map((x) => x.name);
}
