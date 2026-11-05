const ORDERS = [
  {id: 1, code: "B-200", totalCents: 22492, items: 1, status: "paid", country: "UK"},
  {id: 2, code: "C-301", totalCents: 17178, items: 7, status: "shipped", country: "UK"},
  {id: 3, code: "A-101", totalCents: 3428, items: 5, status: "cancelled", country: "US"},
  {id: 4, code: "E-501", totalCents: 13186, items: 5, status: "cancelled", country: "UK"},
  {id: 5, code: "A-100", totalCents: 24738, items: 5, status: "cancelled", country: "DE"},
  {id: 6, code: "E-500", totalCents: 19595, items: 7, status: "paid", country: "DE"},
  {id: 7, code: "D-400", totalCents: 11017, items: 3, status: "cancelled", country: "UK"},
  {id: 8, code: "D-401", totalCents: 5708, items: 6, status: "pending", country: "DE"}
];

test("with 1", () => {
  expect(itemsHistogram(ORDERS, 1)).toEqual({"1":1,"3":1,"5":3,"6":1,"7":2});
});

test("with 2", () => {
  expect(itemsHistogram(ORDERS, 2)).toEqual({"0":1,"2":1,"4":3,"6":3});
});
