const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: 759, day: 25, category: "salary"},
  {id: 2, reference: "TX-04", amount: 410, day: 25, category: "fun"},
  {id: 3, reference: "TX-06", amount: -174, day: 23, category: "travel"},
  {id: 4, reference: "TX-08", amount: 946, day: 28, category: "fun"},
  {id: 5, reference: "TX-05", amount: 58, day: 23, category: "rent"},
  {id: 6, reference: "TX-01", amount: 1063, day: 5, category: "food"},
  {id: 7, reference: "TX-12", amount: 549, day: 22, category: "rent"},
  {id: 8, reference: "TX-07", amount: 1010, day: 25, category: "salary"}
];

test("with 1", () => {
  expect(nthByDay(TRANSACTIONS, 1)).toEqual("TX-08");
});

test("with 2", () => {
  expect(nthByDay(TRANSACTIONS, 2)).toEqual("TX-09");
});

test("with 5", () => {
  expect(nthByDay(TRANSACTIONS, 5)).toEqual("TX-06");
});

test("with 0", () => {
  expect(nthByDay(TRANSACTIONS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByDay(TRANSACTIONS, 99)).toEqual(null);
});
