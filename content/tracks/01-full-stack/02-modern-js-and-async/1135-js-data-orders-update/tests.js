const ORDERS = [
  {id: 1, code: "C-300", totalCents: 9535, items: 4, status: "cancelled", country: "US"},
  {id: 2, code: "C-302", totalCents: 18822, items: 4, status: "shipped", country: "US"},
  {id: 3, code: "D-400", totalCents: 24181, items: 3, status: "pending", country: "DE"},
  {id: 4, code: "A-100", totalCents: 20750, items: 4, status: "pending", country: "DE"},
  {id: 5, code: "E-501", totalCents: 9664, items: 8, status: "pending", country: "DE"},
  {id: 6, code: "A-101", totalCents: 22961, items: 2, status: "shipped", country: "UK"},
  {id: 7, code: "B-200", totalCents: 3170, items: 8, status: "pending", country: "UK"},
  {id: 8, code: "D-401", totalCents: 13709, items: 8, status: "shipped", country: "US"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(ORDERS);
  bumpItems(ORDERS, "UK", 10);
  expect(JSON.stringify(ORDERS)).toBe(before);
});

test("with \"UK\", 10", () => {
  expect(bumpItems(ORDERS, "UK", 10)).toEqual([{"id":1,"code":"C-300","totalCents":9535,"items":4,"status":"cancelled","country":"US"},{"id":2,"code":"C-302","totalCents":18822,"items":4,"status":"shipped","country":"US"},{"id":3,"code":"D-400","totalCents":24181,"items":3,"status":"pending","country":"DE"},{"id":4,"code":"A-100","totalCents":20750,"items":4,"status":"pending","country":"DE"},{"id":5,"code":"E-501","totalCents":9664,"items":8,"status":"pending","country":"DE"},{"id":6,"code":"A-101","totalCents":22961,"items":12,"status":"shipped","country":"UK"},{"id":7,"code":"B-200","totalCents":3170,"items":18,"status":"pending","country":"UK"},{"id":8,"code":"D-401","totalCents":13709,"items":8,"status":"shipped","country":"US"}]);
});

test("with \"US\", 1", () => {
  expect(bumpItems(ORDERS, "US", 1)).toEqual([{"id":1,"code":"C-300","totalCents":9535,"items":5,"status":"cancelled","country":"US"},{"id":2,"code":"C-302","totalCents":18822,"items":5,"status":"shipped","country":"US"},{"id":3,"code":"D-400","totalCents":24181,"items":3,"status":"pending","country":"DE"},{"id":4,"code":"A-100","totalCents":20750,"items":4,"status":"pending","country":"DE"},{"id":5,"code":"E-501","totalCents":9664,"items":8,"status":"pending","country":"DE"},{"id":6,"code":"A-101","totalCents":22961,"items":2,"status":"shipped","country":"UK"},{"id":7,"code":"B-200","totalCents":3170,"items":8,"status":"pending","country":"UK"},{"id":8,"code":"D-401","totalCents":13709,"items":9,"status":"shipped","country":"US"}]);
});
