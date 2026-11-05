const ORDERS = [
  {id: 1, code: "C-301", totalCents: 9994, items: 4, status: "cancelled", country: "DE"},
  {id: 2, code: "E-501", totalCents: 24750, items: 4, status: "pending", country: "UK"},
  {id: 3, code: "C-302", totalCents: 6880, items: 1, status: "paid", country: "US"},
  {id: 4, code: "C-300", totalCents: 13502, items: 5, status: "shipped", country: "DE"},
  {id: 5, code: "D-401", totalCents: 9752, items: 3, status: "paid", country: "DE"},
  {id: 6, code: "A-100", totalCents: 3880, items: 2, status: "shipped", country: "US"},
  {id: 7, code: "B-200", totalCents: 19801, items: 6, status: "shipped", country: "UK"},
  {id: 8, code: "B-201", totalCents: 6146, items: 7, status: "pending", country: "UK"}
];

test("an empty list", () => {
  expect(totalTotalCents([])).toEqual(0);
});

test("all orders", () => {
  expect(totalTotalCents(ORDERS)).toEqual(94705);
});
