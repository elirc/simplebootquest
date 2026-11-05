const ORDERS = [
  {id: 1, code: "C-302", totalCents: 3658, items: 8, status: "paid", country: "DE"},
  {id: 2, code: "D-401", totalCents: 7457, items: 3, status: "pending", country: "UK"},
  {id: 3, code: "B-201", totalCents: 15012, items: 8, status: "cancelled", country: "US"},
  {id: 4, code: "A-100", totalCents: 18533, items: 7, status: "shipped", country: "US"},
  {id: 5, code: "C-300", totalCents: 9514, items: 4, status: "cancelled", country: "DE"},
  {id: 6, code: "A-102", totalCents: 18698, items: 4, status: "cancelled", country: "DE"},
  {id: 7, code: "D-400", totalCents: 23220, items: 2, status: "shipped", country: "US"},
  {id: 8, code: "C-301", totalCents: 9298, items: 1, status: "shipped", country: "US"}
];

test("an empty list", () => {
  expect(ordersById([])).toEqual({});
});

test("all orders", () => {
  expect(ordersById(ORDERS)).toEqual({"1":"C-302","2":"D-401","3":"B-201","4":"A-100","5":"C-300","6":"A-102","7":"D-400","8":"C-301"});
});
