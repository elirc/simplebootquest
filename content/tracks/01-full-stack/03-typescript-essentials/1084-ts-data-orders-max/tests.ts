const ORDERS = [
  {id: 1, code: "B-201", totalCents: 5115, items: 8, status: "shipped", country: "UK"},
  {id: 2, code: "C-302", totalCents: 19435, items: 4, status: "paid", country: "US"},
  {id: 3, code: "A-100", totalCents: 15581, items: 3, status: "paid", country: "UK"},
  {id: 4, code: "E-500", totalCents: 12852, items: 5, status: "paid", country: "DE"},
  {id: 5, code: "A-101", totalCents: 7214, items: 9, status: "shipped", country: "US"},
  {id: 6, code: "E-501", totalCents: 22398, items: 7, status: "paid", country: "US"},
  {id: 7, code: "C-300", totalCents: 13813, items: 7, status: "paid", country: "UK"},
  {id: 8, code: "D-401", totalCents: 11469, items: 4, status: "shipped", country: "UK"}
];

test("an empty list", () => {
  expect(highestItems([])).toEqual(null);
});

test("all orders", () => {
  expect(highestItems(ORDERS)).toEqual("A-101");
});
