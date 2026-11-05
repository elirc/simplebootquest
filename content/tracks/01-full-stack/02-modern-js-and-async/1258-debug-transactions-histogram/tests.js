const TRANSACTIONS = [
  {id: 1, reference: "TX-01", amount: 539, day: 24, category: "travel"},
  {id: 2, reference: "TX-02", amount: 109, day: 8, category: "fun"},
  {id: 3, reference: "TX-11", amount: 492, day: 9, category: "travel"},
  {id: 4, reference: "TX-10", amount: 545, day: 23, category: "food"},
  {id: 5, reference: "TX-12", amount: -12, day: 7, category: "rent"},
  {id: 6, reference: "TX-06", amount: 3, day: 7, category: "travel"},
  {id: 7, reference: "TX-04", amount: 370, day: 26, category: "fun"},
  {id: 8, reference: "TX-05", amount: -194, day: 8, category: "fun"}
];

test("with 400", () => {
  expect(amountHistogram(TRANSACTIONS, 400)).toEqual({"0":3,"400":3,"-400":2});
});

test("with 800", () => {
  expect(amountHistogram(TRANSACTIONS, 800)).toEqual({"0":6,"-800":2});
});
