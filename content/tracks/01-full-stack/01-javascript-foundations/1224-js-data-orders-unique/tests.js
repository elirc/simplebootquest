const ORDERS = [
  {id: 1, code: "C-302", totalCents: 14332, items: 8, status: "shipped", country: "DE"},
  {id: 2, code: "B-201", totalCents: 19036, items: 5, status: "paid", country: "US"},
  {id: 3, code: "D-400", totalCents: 11629, items: 4, status: "pending", country: "DE"},
  {id: 4, code: "D-401", totalCents: 11949, items: 2, status: "paid", country: "DE"},
  {id: 5, code: "C-301", totalCents: 2792, items: 6, status: "cancelled", country: "US"},
  {id: 6, code: "E-500", totalCents: 22613, items: 2, status: "pending", country: "DE"},
  {id: 7, code: "A-101", totalCents: 897, items: 5, status: "pending", country: "DE"},
  {id: 8, code: "A-100", totalCents: 22542, items: 9, status: "paid", country: "US"}
];

test("an empty list", () => {
  expect(distinctCountrys([])).toEqual([]);
});

test("all orders", () => {
  expect(distinctCountrys(ORDERS)).toEqual(["DE","US"]);
});
