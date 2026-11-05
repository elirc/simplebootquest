const ORDERS = [
  {id: 1, code: "A-102", totalCents: 12145, items: 6, status: "pending", country: "UK"},
  {id: 2, code: "C-301", totalCents: 3090, items: 7, status: "cancelled", country: "US"},
  {id: 3, code: "B-201", totalCents: 2625, items: 4, status: "pending", country: "US"},
  {id: 4, code: "A-101", totalCents: 5875, items: 9, status: "cancelled", country: "DE"},
  {id: 5, code: "A-100", totalCents: 9484, items: 1, status: "paid", country: "UK"},
  {id: 6, code: "E-500", totalCents: 23717, items: 6, status: "paid", country: "UK"},
  {id: 7, code: "D-401", totalCents: 16607, items: 2, status: "cancelled", country: "DE"},
  {id: 8, code: "E-501", totalCents: 16847, items: 3, status: "pending", country: "UK"}
];

test("an empty list", () => {
  expect(countOrdersPerCountry([])).toEqual({});
});

test("all orders", () => {
  expect(countOrdersPerCountry(ORDERS)).toEqual({"UK":4,"US":2,"DE":2});
});
