const ORDERS = [
  {id: 1, code: "A-101", totalCents: 16786, items: 5, status: "shipped", country: "US"},
  {id: 2, code: "B-201", totalCents: 17138, items: 6, status: "pending", country: "UK"},
  {id: 3, code: "E-501", totalCents: 22873, items: 4, status: "shipped", country: "UK"},
  {id: 4, code: "A-102", totalCents: 11028, items: 3, status: "shipped", country: "UK"},
  {id: 5, code: "B-200", totalCents: 4114, items: 3, status: "paid", country: "US"},
  {id: 6, code: "A-100", totalCents: 21818, items: 5, status: "shipped", country: "US"},
  {id: 7, code: "D-401", totalCents: 13698, items: 5, status: "cancelled", country: "US"},
  {id: 8, code: "D-400", totalCents: 13307, items: 1, status: "paid", country: "UK"}
];

test("an empty list", () => {
  expect(averageTotalCents([])).toEqual(null);
});

test("all orders", () => {
  expect(averageTotalCents(ORDERS)).toEqual(15095.3);
});
