// mutant: sort direction reversed
const ORDERS = [
  {id: 1, code: "C-300", totalCents: 21691, items: 4, status: "pending", country: "US"},
  {id: 2, code: "C-302", totalCents: 20517, items: 5, status: "shipped", country: "DE"},
  {id: 3, code: "C-301", totalCents: 9560, items: 2, status: "shipped", country: "DE"},
  {id: 4, code: "A-102", totalCents: 13343, items: 4, status: "shipped", country: "US"},
  {id: 5, code: "E-501", totalCents: 15623, items: 7, status: "paid", country: "US"},
  {id: 6, code: "A-101", totalCents: 24483, items: 5, status: "cancelled", country: "UK"},
  {id: 7, code: "D-401", totalCents: 10015, items: 1, status: "shipped", country: "US"},
  {id: 8, code: "B-201", totalCents: 17687, items: 6, status: "cancelled", country: "DE"}
];

function ordersByItems(orders) {
  return [...orders].sort((a, b) => b.items - a.items).map((x) => x.code);
}
