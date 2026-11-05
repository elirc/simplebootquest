// mutant: condition negated: `===` became `!==`
const ORDERS = [
  {id: 1, code: "C-302", totalCents: 15108, items: 4, status: "shipped", country: "DE"},
  {id: 2, code: "C-301", totalCents: 3395, items: 8, status: "paid", country: "DE"},
  {id: 3, code: "E-501", totalCents: 2607, items: 6, status: "paid", country: "US"},
  {id: 4, code: "E-500", totalCents: 17240, items: 1, status: "pending", country: "US"},
  {id: 5, code: "A-100", totalCents: 24656, items: 6, status: "pending", country: "US"},
  {id: 6, code: "A-102", totalCents: 10490, items: 1, status: "paid", country: "DE"},
  {id: 7, code: "D-400", totalCents: 5275, items: 7, status: "cancelled", country: "UK"},
  {id: 8, code: "D-401", totalCents: 5055, items: 9, status: "paid", country: "US"}
];

function ordersInCountryRanked(orders, value) {
  return orders
    .filter((x) => x.country !== value)
    .sort((a, b) => b.items - a.items)
    .map((x) => x.code);
}
