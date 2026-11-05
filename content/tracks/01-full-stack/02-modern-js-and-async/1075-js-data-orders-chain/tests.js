const ORDERS = [
  {id: 1, code: "A-101", totalCents: 18316, items: 5, status: "shipped", country: "UK"},
  {id: 2, code: "B-200", totalCents: 2848, items: 3, status: "cancelled", country: "UK"},
  {id: 3, code: "C-302", totalCents: 20412, items: 6, status: "pending", country: "US"},
  {id: 4, code: "A-100", totalCents: 24381, items: 7, status: "paid", country: "US"},
  {id: 5, code: "E-501", totalCents: 13756, items: 4, status: "cancelled", country: "DE"},
  {id: 6, code: "C-301", totalCents: 22528, items: 3, status: "shipped", country: "DE"},
  {id: 7, code: "A-102", totalCents: 7930, items: 4, status: "shipped", country: "DE"},
  {id: 8, code: "C-300", totalCents: 21599, items: 1, status: "shipped", country: "DE"}
];

test("with \"pending\"", () => {
  expect(ordersInStatusRanked(ORDERS, "pending")).toEqual(["C-302"]);
});

test("with \"paid\"", () => {
  expect(ordersInStatusRanked(ORDERS, "paid")).toEqual(["A-100"]);
});

test("with \"shipped\"", () => {
  expect(ordersInStatusRanked(ORDERS, "shipped")).toEqual(["C-301","C-300","A-101","A-102"]);
});
