const ORDERS = [
  {id: 1, code: "C-300", totalCents: 23882, items: 7, status: "pending", country: "UK"},
  {id: 2, code: "D-400", totalCents: 9799, items: 6, status: "shipped", country: "US"},
  {id: 3, code: "B-201", totalCents: 24557, items: 2, status: "cancelled", country: "US"},
  {id: 4, code: "A-101", totalCents: 16522, items: 2, status: "pending", country: "DE"},
  {id: 5, code: "C-302", totalCents: 7189, items: 9, status: "shipped", country: "DE"},
  {id: 6, code: "E-501", totalCents: 20311, items: 5, status: "cancelled", country: "UK"},
  {id: 7, code: "A-100", totalCents: 17848, items: 5, status: "shipped", country: "US"},
  {id: 8, code: "C-301", totalCents: 14823, items: 3, status: "pending", country: "US"}
];

test("an empty list", () => {
  expect(totalCentsPerStatus([])).toEqual({});
});

test("all orders", () => {
  expect(totalCentsPerStatus(ORDERS)).toEqual({"pending":55227,"shipped":34836,"cancelled":44868});
});
