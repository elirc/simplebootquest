const ORDERS = [
  {id: 1, code: "C-300", totalCents: 9490, items: 2, status: "shipped", country: "DE"},
  {id: 2, code: "D-401", totalCents: 19809, items: 3, status: "paid", country: "US"},
  {id: 3, code: "B-201", totalCents: 7805, items: 7, status: "paid", country: "DE"},
  {id: 4, code: "E-501", totalCents: 12351, items: 4, status: "paid", country: "UK"},
  {id: 5, code: "A-101", totalCents: 3393, items: 8, status: "cancelled", country: "DE"},
  {id: 6, code: "C-301", totalCents: 3793, items: 7, status: "paid", country: "UK"},
  {id: 7, code: "E-500", totalCents: 5097, items: 8, status: "cancelled", country: "US"},
  {id: 8, code: "D-400", totalCents: 11135, items: 8, status: "shipped", country: "UK"}
];

function ordersInRange(orders, low, high) {
  return orders.filter((x) => x.totalCents >= low && x.totalCents <= high).map((x) => x.code);
}
