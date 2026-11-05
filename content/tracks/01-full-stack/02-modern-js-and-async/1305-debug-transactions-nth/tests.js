const TRANSACTIONS = [
  {id: 1, reference: "TX-07", amount: 11, day: 3, category: "travel"},
  {id: 2, reference: "TX-03", amount: 714, day: 1, category: "fun"},
  {id: 3, reference: "TX-06", amount: 742, day: 6, category: "rent"},
  {id: 4, reference: "TX-12", amount: 1174, day: 5, category: "travel"},
  {id: 5, reference: "TX-02", amount: 109, day: 16, category: "food"},
  {id: 6, reference: "TX-09", amount: 512, day: 6, category: "food"},
  {id: 7, reference: "TX-08", amount: 910, day: 13, category: "salary"},
  {id: 8, reference: "TX-11", amount: 259, day: 11, category: "travel"}
];

test("with 1", () => {
  expect(nthByAmount(TRANSACTIONS, 1)).toEqual("TX-12");
});

test("with 2", () => {
  expect(nthByAmount(TRANSACTIONS, 2)).toEqual("TX-08");
});

test("with 5", () => {
  expect(nthByAmount(TRANSACTIONS, 5)).toEqual("TX-09");
});

test("with 0", () => {
  expect(nthByAmount(TRANSACTIONS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByAmount(TRANSACTIONS, 99)).toEqual(null);
});
