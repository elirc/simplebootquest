const ORDERS = [
  {id: 1, code: "D-400", totalCents: 3989, items: 2, status: "paid", country: "US"},
  {id: 2, code: "A-102", totalCents: 14675, items: 7, status: "shipped", country: "US"},
  {id: 3, code: "C-302", totalCents: 5742, items: 5, status: "shipped", country: "US"},
  {id: 4, code: "C-301", totalCents: 11348, items: 4, status: "cancelled", country: "DE"},
  {id: 5, code: "C-300", totalCents: 18429, items: 8, status: "cancelled", country: "DE"},
  {id: 6, code: "B-201", totalCents: 9946, items: 8, status: "shipped", country: "DE"},
  {id: 7, code: "D-401", totalCents: 12615, items: 2, status: "shipped", country: "UK"},
  {id: 8, code: "A-100", totalCents: 4667, items: 6, status: "cancelled", country: "DE"}
];

test("an empty list", () => {
  expect(lowestTotalCents([])).toEqual(null);
});

test("all orders", () => {
  expect(lowestTotalCents(ORDERS)).toEqual("D-400");
});
