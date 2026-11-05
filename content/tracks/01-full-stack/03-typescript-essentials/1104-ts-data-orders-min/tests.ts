const ORDERS = [
  {id: 1, code: "C-300", totalCents: 5828, items: 4, status: "cancelled", country: "DE"},
  {id: 2, code: "A-101", totalCents: 1084, items: 2, status: "cancelled", country: "UK"},
  {id: 3, code: "A-102", totalCents: 3047, items: 8, status: "pending", country: "UK"},
  {id: 4, code: "C-301", totalCents: 8320, items: 8, status: "paid", country: "DE"},
  {id: 5, code: "D-400", totalCents: 629, items: 2, status: "shipped", country: "US"},
  {id: 6, code: "A-100", totalCents: 12688, items: 1, status: "pending", country: "US"},
  {id: 7, code: "B-200", totalCents: 21631, items: 4, status: "cancelled", country: "DE"},
  {id: 8, code: "B-201", totalCents: 2848, items: 3, status: "shipped", country: "DE"}
];

test("an empty list", () => {
  expect(lowestTotalCents([])).toEqual(null);
});

test("all orders", () => {
  expect(lowestTotalCents(ORDERS)).toEqual("D-400");
});
