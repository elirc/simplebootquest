const ORDERS = [
  {id: 1, code: "A-102", totalCents: 13120, items: 5, status: "paid", country: "DE"},
  {id: 2, code: "C-302", totalCents: 11221, items: 9, status: "pending", country: "UK"},
  {id: 3, code: "E-500", totalCents: 5803, items: 6, status: "shipped", country: "DE"},
  {id: 4, code: "E-501", totalCents: 19125, items: 8, status: "paid", country: "UK"},
  {id: 5, code: "B-200", totalCents: 12625, items: 3, status: "shipped", country: "US"},
  {id: 6, code: "C-301", totalCents: 4994, items: 3, status: "paid", country: "DE"},
  {id: 7, code: "D-400", totalCents: 13321, items: 9, status: "pending", country: "US"},
  {id: 8, code: "B-201", totalCents: 5176, items: 7, status: "cancelled", country: "US"}
];

test("with \"C-301\"", () => {
  expect(itemsOf(ORDERS, "C-301")).toEqual(3);
});

test("with \"Nope\"", () => {
  expect(itemsOf(ORDERS, "Nope")).toEqual(null);
});
