const PRODUCTS = [
  {id: 1, name: "Webcam", price: 16, stock: 54, category: "home", onSale: false},
  {id: 2, name: "Notebook", price: 59, stock: 18, category: "office", onSale: false},
  {id: 3, name: "Monitor Arm", price: 36, stock: 52, category: "tech", onSale: false},
  {id: 4, name: "Plant Pot", price: 27, stock: 32, category: "tech", onSale: true},
  {id: 5, name: "Headphones", price: 59, stock: 45, category: "office", onSale: true},
  {id: 6, name: "Desk Lamp", price: 31, stock: 21, category: "tech", onSale: true},
  {id: 7, name: "Pen Set", price: 24, stock: 47, category: "tech", onSale: false},
  {id: 8, name: "Backpack", price: 110, stock: 1, category: "home", onSale: true}
];

function averagePrice(products) {
  if (products.length === 0) return null;
  const total = products.reduce((sum, x) => sum + x.price, 0);
  return Math.round((total / products.length) * 10) / 10;
}
