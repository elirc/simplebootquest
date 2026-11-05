const ORDERS = [
  {id: 1, code: "E-501", totalCents: 17607, items: 9, status: "shipped", country: "UK"},
  {id: 2, code: "D-400", totalCents: 7699, items: 5, status: "shipped", country: "DE"},
  {id: 3, code: "B-201", totalCents: 7641, items: 3, status: "cancelled", country: "DE"},
  {id: 4, code: "E-500", totalCents: 18403, items: 7, status: "pending", country: "DE"},
  {id: 5, code: "C-302", totalCents: 20334, items: 3, status: "shipped", country: "DE"},
  {id: 6, code: "C-301", totalCents: 5436, items: 7, status: "pending", country: "US"},
  {id: 7, code: "C-300", totalCents: 6060, items: 1, status: "shipped", country: "UK"},
  {id: 8, code: "A-101", totalCents: 16806, items: 3, status: "shipped", country: "DE"}
];

test("with 1", () => {
  expect(itemsHistogram(ORDERS, 1)).toEqual({"1":1,"3":3,"5":1,"7":2,"9":1});
});

test("with 2", () => {
  expect(itemsHistogram(ORDERS, 2)).toEqual({"0":1,"2":3,"4":1,"6":2,"8":1});
});
