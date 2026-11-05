const TRANSACTIONS = [
  {id: 1, reference: "TX-04", amount: -331, day: 8, category: "fun"},
  {id: 2, reference: "TX-07", amount: 55, day: 1, category: "salary"},
  {id: 3, reference: "TX-11", amount: 256, day: 25, category: "rent"},
  {id: 4, reference: "TX-10", amount: 1036, day: 24, category: "travel"},
  {id: 5, reference: "TX-02", amount: 264, day: 17, category: "salary"},
  {id: 6, reference: "TX-05", amount: 428, day: 14, category: "rent"},
  {id: 7, reference: "TX-06", amount: 407, day: 16, category: "rent"},
  {id: 8, reference: "TX-09", amount: 645, day: 22, category: "travel"}
];

test("an empty list", () => {
  expect(describeTransactions([])).toEqual([]);
});

test("all transactions", () => {
  expect(describeTransactions(TRANSACTIONS)).toEqual(["TX-04 (8)","TX-07 (1)","TX-11 (25)","TX-10 (24)","TX-02 (17)","TX-05 (14)","TX-06 (16)","TX-09 (22)"]);
});
