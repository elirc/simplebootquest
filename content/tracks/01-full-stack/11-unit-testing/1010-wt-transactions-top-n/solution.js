test('does not mutate the input', () => {
  const before = JSON.stringify(TRANSACTIONS);
  topTransactionsByDay(TRANSACTIONS, 1);
  expect(JSON.stringify(TRANSACTIONS)).toBe(before);
});

test("with 1", () => {
  expect(topTransactionsByDay(TRANSACTIONS, 1)).toEqual(["TX-02"]);
});

test("with 3", () => {
  expect(topTransactionsByDay(TRANSACTIONS, 3)).toEqual(["TX-02","TX-05","TX-04"]);
});

test("with 0", () => {
  expect(topTransactionsByDay(TRANSACTIONS, 0)).toEqual([]);
});
