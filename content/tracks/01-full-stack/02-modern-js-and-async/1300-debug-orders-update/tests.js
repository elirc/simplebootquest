const ORDERS = [
  {id: 1, code: "D-401", totalCents: 10262, items: 5, status: "paid", country: "DE"},
  {id: 2, code: "C-302", totalCents: 1388, items: 8, status: "pending", country: "DE"},
  {id: 3, code: "A-101", totalCents: 7980, items: 5, status: "shipped", country: "US"},
  {id: 4, code: "A-100", totalCents: 19286, items: 6, status: "pending", country: "DE"},
  {id: 5, code: "E-500", totalCents: 8415, items: 4, status: "pending", country: "UK"},
  {id: 6, code: "D-400", totalCents: 4457, items: 8, status: "pending", country: "UK"},
  {id: 7, code: "C-300", totalCents: 17651, items: 5, status: "cancelled", country: "UK"},
  {id: 8, code: "A-102", totalCents: 17331, items: 1, status: "cancelled", country: "UK"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(ORDERS);
  bumpTotalCents(ORDERS, "UK", 10);
  expect(JSON.stringify(ORDERS)).toBe(before);
});

test("with \"UK\", 10", () => {
  expect(bumpTotalCents(ORDERS, "UK", 10)).toEqual([{"id":1,"code":"D-401","totalCents":10262,"items":5,"status":"paid","country":"DE"},{"id":2,"code":"C-302","totalCents":1388,"items":8,"status":"pending","country":"DE"},{"id":3,"code":"A-101","totalCents":7980,"items":5,"status":"shipped","country":"US"},{"id":4,"code":"A-100","totalCents":19286,"items":6,"status":"pending","country":"DE"},{"id":5,"code":"E-500","totalCents":8425,"items":4,"status":"pending","country":"UK"},{"id":6,"code":"D-400","totalCents":4467,"items":8,"status":"pending","country":"UK"},{"id":7,"code":"C-300","totalCents":17661,"items":5,"status":"cancelled","country":"UK"},{"id":8,"code":"A-102","totalCents":17341,"items":1,"status":"cancelled","country":"UK"}]);
});

test("with \"US\", 1", () => {
  expect(bumpTotalCents(ORDERS, "US", 1)).toEqual([{"id":1,"code":"D-401","totalCents":10262,"items":5,"status":"paid","country":"DE"},{"id":2,"code":"C-302","totalCents":1388,"items":8,"status":"pending","country":"DE"},{"id":3,"code":"A-101","totalCents":7981,"items":5,"status":"shipped","country":"US"},{"id":4,"code":"A-100","totalCents":19286,"items":6,"status":"pending","country":"DE"},{"id":5,"code":"E-500","totalCents":8415,"items":4,"status":"pending","country":"UK"},{"id":6,"code":"D-400","totalCents":4457,"items":8,"status":"pending","country":"UK"},{"id":7,"code":"C-300","totalCents":17651,"items":5,"status":"cancelled","country":"UK"},{"id":8,"code":"A-102","totalCents":17331,"items":1,"status":"cancelled","country":"UK"}]);
});
