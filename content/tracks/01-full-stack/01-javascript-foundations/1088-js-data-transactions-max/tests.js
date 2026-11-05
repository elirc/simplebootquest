const TRANSACTIONS = [
  {id: 1, reference: "TX-11", amount: -30, day: 18, category: "travel"},
  {id: 2, reference: "TX-03", amount: -70, day: 25, category: "travel"},
  {id: 3, reference: "TX-07", amount: -229, day: 15, category: "travel"},
  {id: 4, reference: "TX-05", amount: -151, day: 10, category: "fun"},
  {id: 5, reference: "TX-06", amount: 759, day: 1, category: "food"},
  {id: 6, reference: "TX-10", amount: 992, day: 11, category: "food"},
  {id: 7, reference: "TX-08", amount: 268, day: 7, category: "rent"},
  {id: 8, reference: "TX-01", amount: 88, day: 20, category: "travel"}
];

test("an empty list", () => {
  expect(highestAmount([])).toEqual(null);
});

test("all transactions", () => {
  expect(highestAmount(TRANSACTIONS)).toEqual("TX-10");
});
