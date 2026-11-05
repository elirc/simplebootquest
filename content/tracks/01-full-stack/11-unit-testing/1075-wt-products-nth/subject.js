const PRODUCTS = [
  {id: 1, name: "Water Bottle", price: 83, stock: 1, category: "office", onSale: true},
  {id: 2, name: "Monitor Arm", price: 40, stock: 25, category: "office", onSale: true},
  {id: 3, name: "Headphones", price: 104, stock: 45, category: "office", onSale: false},
  {id: 4, name: "Notebook", price: 32, stock: 18, category: "home", onSale: false},
  {id: 5, name: "Pen Set", price: 83, stock: 31, category: "office", onSale: true},
  {id: 6, name: "Mouse Pad", price: 75, stock: 54, category: "office", onSale: false},
  {id: 7, name: "Coffee Mug", price: 51, stock: 34, category: "home", onSale: false},
  {id: 8, name: "Desk Lamp", price: 45, stock: 59, category: "tech", onSale: true}
];

function nthByPrice(products, n) {
  const sorted = [...products].sort((a, b) => b.price - a.price);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
