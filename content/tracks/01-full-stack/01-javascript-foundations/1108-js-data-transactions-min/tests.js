const TRANSACTIONS = [
  {id: 1, reference: "TX-04", amount: -17, day: 11, category: "travel"},
  {id: 2, reference: "TX-05", amount: 992, day: 26, category: "salary"},
  {id: 3, reference: "TX-10", amount: 195, day: 14, category: "fun"},
  {id: 4, reference: "TX-01", amount: -394, day: 9, category: "fun"},
  {id: 5, reference: "TX-03", amount: 377, day: 19, category: "rent"},
  {id: 6, reference: "TX-06", amount: -283, day: 4, category: "food"},
  {id: 7, reference: "TX-11", amount: 1177, day: 11, category: "fun"},
  {id: 8, reference: "TX-08", amount: 680, day: 13, category: "salary"}
];

test("an empty list", () => {
  expect(lowestDay([])).toEqual(null);
});

test("all transactions", () => {
  expect(lowestDay(TRANSACTIONS)).toEqual("TX-06");
});
