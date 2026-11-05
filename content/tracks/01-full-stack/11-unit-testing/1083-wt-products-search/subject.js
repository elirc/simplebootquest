const PRODUCTS = [
  {id: 1, name: "Pen Set", price: 112, stock: 0, category: "home", onSale: true},
  {id: 2, name: "Mouse Pad", price: 68, stock: 55, category: "home", onSale: true},
  {id: 3, name: "Backpack", price: 16, stock: 56, category: "home", onSale: true},
  {id: 4, name: "Coffee Mug", price: 109, stock: 25, category: "office", onSale: true},
  {id: 5, name: "Water Bottle", price: 65, stock: 39, category: "tech", onSale: true},
  {id: 6, name: "Monitor Arm", price: 88, stock: 42, category: "tech", onSale: true},
  {id: 7, name: "Plant Pot", price: 78, stock: 23, category: "tech", onSale: false},
  {id: 8, name: "Headphones", price: 117, stock: 7, category: "tech", onSale: false}
];

function searchProducts(products, query) {
  const q = query.trim().toLowerCase();
  return products.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
