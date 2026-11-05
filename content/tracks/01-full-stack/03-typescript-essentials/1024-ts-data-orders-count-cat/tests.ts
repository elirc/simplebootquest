const ORDERS = [
  {id: 1, code: "D-400", totalCents: 9624, items: 4, status: "cancelled", country: "US"},
  {id: 2, code: "C-302", totalCents: 1321, items: 7, status: "shipped", country: "US"},
  {id: 3, code: "C-301", totalCents: 3489, items: 5, status: "pending", country: "UK"},
  {id: 4, code: "D-401", totalCents: 21806, items: 4, status: "cancelled", country: "UK"},
  {id: 5, code: "C-300", totalCents: 10772, items: 2, status: "paid", country: "DE"},
  {id: 6, code: "E-500", totalCents: 23894, items: 5, status: "shipped", country: "UK"},
  {id: 7, code: "A-101", totalCents: 15152, items: 7, status: "pending", country: "UK"},
  {id: 8, code: "B-200", totalCents: 3523, items: 2, status: "paid", country: "DE"}
];

test("with \"UK\"", () => {
  expect(countOrdersByCountry(ORDERS, "UK")).toEqual(4);
});

test("with \"US\"", () => {
  expect(countOrdersByCountry(ORDERS, "US")).toEqual(2);
});

test("with \"DE\"", () => {
  expect(countOrdersByCountry(ORDERS, "DE")).toEqual(2);
});

test("with \"nope\"", () => {
  expect(countOrdersByCountry(ORDERS, "nope")).toEqual(0);
});
