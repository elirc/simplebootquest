const TRANSACTIONS = [
  {id: 1, reference: "TX-05", amount: -381, day: 15, category: "rent"},
  {id: 2, reference: "TX-04", amount: -18, day: 26, category: "travel"},
  {id: 3, reference: "TX-12", amount: 497, day: 10, category: "fun"},
  {id: 4, reference: "TX-11", amount: 1089, day: 19, category: "salary"},
  {id: 5, reference: "TX-10", amount: 1101, day: 14, category: "salary"},
  {id: 6, reference: "TX-08", amount: -287, day: 1, category: "salary"},
  {id: 7, reference: "TX-07", amount: 968, day: 6, category: "salary"},
  {id: 8, reference: "TX-03", amount: -202, day: 5, category: "rent"}
];

test("with 5", () => {
  expect(dayHistogram(TRANSACTIONS, 5)).toEqual({"0":1,"5":2,"10":2,"15":2,"25":1});
});

test("with 10", () => {
  expect(dayHistogram(TRANSACTIONS, 10)).toEqual({"0":3,"10":4,"20":1});
});
