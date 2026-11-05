const TRANSACTIONS = [
  {id: 1, reference: "TX-06", amount: -215, day: 14, category: "salary"},
  {id: 2, reference: "TX-12", amount: 1193, day: 9, category: "rent"},
  {id: 3, reference: "TX-02", amount: -155, day: 5, category: "food"},
  {id: 4, reference: "TX-04", amount: 628, day: 15, category: "fun"},
  {id: 5, reference: "TX-08", amount: 558, day: 22, category: "food"},
  {id: 6, reference: "TX-10", amount: -338, day: 24, category: "food"},
  {id: 7, reference: "TX-03", amount: 871, day: 27, category: "fun"},
  {id: 8, reference: "TX-01", amount: 687, day: 13, category: "rent"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(TRANSACTIONS);
  topTransactionsByDay(TRANSACTIONS, 1);
  expect(JSON.stringify(TRANSACTIONS)).toBe(before);
});

test("with 1", () => {
  expect(topTransactionsByDay(TRANSACTIONS, 1)).toEqual(["TX-03"]);
});

test("with 3", () => {
  expect(topTransactionsByDay(TRANSACTIONS, 3)).toEqual(["TX-03","TX-10","TX-08"]);
});

test("with 0", () => {
  expect(topTransactionsByDay(TRANSACTIONS, 0)).toEqual([]);
});
