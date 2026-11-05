const ORDERS = [
  {id: 1, code: "A-100", totalCents: 882, items: 5, status: "shipped", country: "DE"},
  {id: 2, code: "E-500", totalCents: 5544, items: 8, status: "shipped", country: "DE"},
  {id: 3, code: "A-101", totalCents: 8492, items: 2, status: "pending", country: "US"},
  {id: 4, code: "E-501", totalCents: 5073, items: 8, status: "cancelled", country: "DE"},
  {id: 5, code: "A-102", totalCents: 831, items: 6, status: "cancelled", country: "US"},
  {id: 6, code: "B-200", totalCents: 9822, items: 8, status: "shipped", country: "UK"},
  {id: 7, code: "C-301", totalCents: 11279, items: 9, status: "paid", country: "US"},
  {id: 8, code: "D-401", totalCents: 20600, items: 7, status: "cancelled", country: "DE"}
];

function averageItems(orders) {
  if (orders.length === 0) return null;
  const total = orders.reduce((sum, x) => sum + x.items, 0);
  return Math.round((total / orders.length) * 10) / 10;
}
