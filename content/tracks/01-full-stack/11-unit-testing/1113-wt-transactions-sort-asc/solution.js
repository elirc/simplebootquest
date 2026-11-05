test('does not mutate the input', () => {
  const before = JSON.stringify(TRANSACTIONS);
  transactionsByAmount(TRANSACTIONS);
  expect(JSON.stringify(TRANSACTIONS)).toBe(before);
});

test("all transactions", () => {
  expect(transactionsByAmount(TRANSACTIONS)).toEqual(["TX-09","TX-06","TX-03","TX-12","TX-08","TX-02","TX-11","TX-10"]);
});
