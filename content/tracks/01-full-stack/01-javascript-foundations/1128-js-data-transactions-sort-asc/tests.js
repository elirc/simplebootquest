const TRANSACTIONS = [
  {id: 1, reference: "TX-05", amount: -46, day: 20, category: "rent"},
  {id: 2, reference: "TX-11", amount: -14, day: 27, category: "rent"},
  {id: 3, reference: "TX-03", amount: -269, day: 21, category: "fun"},
  {id: 4, reference: "TX-10", amount: 33, day: 20, category: "travel"},
  {id: 5, reference: "TX-04", amount: 1003, day: 6, category: "travel"},
  {id: 6, reference: "TX-08", amount: 411, day: 11, category: "food"},
  {id: 7, reference: "TX-02", amount: 675, day: 1, category: "fun"},
  {id: 8, reference: "TX-12", amount: 1099, day: 7, category: "travel"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(TRANSACTIONS);
  transactionsByAmount(TRANSACTIONS);
  expect(JSON.stringify(TRANSACTIONS)).toBe(before);
});

test("all transactions", () => {
  expect(transactionsByAmount(TRANSACTIONS)).toEqual(["TX-03","TX-05","TX-11","TX-10","TX-08","TX-02","TX-04","TX-12"]);
});
