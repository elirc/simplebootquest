const BEFORE = [
  {id: 1, code: "D-400", totalCents: 10571, items: 6, status: "pending", country: "DE"},
  {id: 2, code: "C-300", totalCents: 19273, items: 3, status: "cancelled", country: "US"},
  {id: 3, code: "A-101", totalCents: 18077, items: 8, status: "paid", country: "DE"},
  {id: 4, code: "E-500", totalCents: 17375, items: 2, status: "shipped", country: "DE"},
  {id: 5, code: "A-102", totalCents: 19966, items: 7, status: "pending", country: "UK"},
  {id: 6, code: "A-100", totalCents: 7097, items: 6, status: "pending", country: "UK"},
  {id: 7, code: "E-501", totalCents: 3703, items: 7, status: "cancelled", country: "DE"},
  {id: 8, code: "B-200", totalCents: 23572, items: 5, status: "shipped", country: "DE"}
];
const AFTER = [
  {id: 1, code: "D-400", totalCents: 10571, items: 6, status: "pending", country: "DE"},
  {id: 2, code: "C-300", totalCents: 19280, items: 3, status: "cancelled", country: "US"},
  {id: 3, code: "A-101", totalCents: 18077, items: 8, status: "paid", country: "DE"},
  {id: 4, code: "E-500", totalCents: 17375, items: 2, status: "shipped", country: "DE"},
  {id: 5, code: "A-102", totalCents: 19973, items: 7, status: "pending", country: "UK"},
  {id: 6, code: "A-100", totalCents: 7097, items: 6, status: "pending", country: "UK"},
  {id: 7, code: "E-501", totalCents: 3703, items: 7, status: "cancelled", country: "DE"},
  {id: 8, code: "B-200", totalCents: 23579, items: 5, status: "shipped", country: "DE"}
];

test("finds changed ids", () => {
  expect(totalCentsChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(totalCentsChanges(BEFORE, BEFORE)).toEqual([]);
});
