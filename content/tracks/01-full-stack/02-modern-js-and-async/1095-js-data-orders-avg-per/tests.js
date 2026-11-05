const ORDERS = [
  {id: 1, code: "E-500", totalCents: 2150, items: 3, status: "paid", country: "UK"},
  {id: 2, code: "B-200", totalCents: 21937, items: 3, status: "shipped", country: "DE"},
  {id: 3, code: "A-102", totalCents: 4646, items: 6, status: "pending", country: "US"},
  {id: 4, code: "D-400", totalCents: 10061, items: 8, status: "cancelled", country: "UK"},
  {id: 5, code: "B-201", totalCents: 7994, items: 3, status: "pending", country: "UK"},
  {id: 6, code: "E-501", totalCents: 23128, items: 5, status: "cancelled", country: "DE"},
  {id: 7, code: "C-301", totalCents: 5046, items: 6, status: "cancelled", country: "DE"},
  {id: 8, code: "C-302", totalCents: 1196, items: 3, status: "paid", country: "UK"}
];

test("an empty list", () => {
  expect(averageTotalCentsPerStatus([])).toEqual({});
});

test("all orders", () => {
  expect(averageTotalCentsPerStatus(ORDERS)).toEqual({"paid":1673,"shipped":21937,"pending":6320,"cancelled":12745});
});
