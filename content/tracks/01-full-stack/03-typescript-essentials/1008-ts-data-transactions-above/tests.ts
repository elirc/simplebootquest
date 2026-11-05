const TRANSACTIONS = [
  {id: 1, reference: "TX-03", amount: -369, day: 21, category: "fun"},
  {id: 2, reference: "TX-10", amount: 565, day: 14, category: "salary"},
  {id: 3, reference: "TX-11", amount: 42, day: 9, category: "rent"},
  {id: 4, reference: "TX-08", amount: 677, day: 22, category: "salary"},
  {id: 5, reference: "TX-06", amount: 794, day: 11, category: "travel"},
  {id: 6, reference: "TX-12", amount: -11, day: 10, category: "salary"},
  {id: 7, reference: "TX-09", amount: 661, day: 16, category: "food"},
  {id: 8, reference: "TX-01", amount: 359, day: 17, category: "food"}
];

test("with 42", () => {
  expect(transactionsAbove(TRANSACTIONS, 42)).toEqual(["TX-10","TX-08","TX-06","TX-09","TX-01"]);
});

test("with 565", () => {
  expect(transactionsAbove(TRANSACTIONS, 565)).toEqual(["TX-08","TX-06","TX-09"]);
});

test("with 999999", () => {
  expect(transactionsAbove(TRANSACTIONS, 999999)).toEqual([]);
});
