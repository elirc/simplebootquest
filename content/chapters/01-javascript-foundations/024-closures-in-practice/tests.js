test('once only calls fn once', () => {
  let calls = 0;
  const init = once((x) => { calls++; return x * 2; });
  expect(init(5)).toBe(10);
  expect(init(100)).toBe(10);
  expect(calls).toBe(1);
});

test('memoize caches by argument', () => {
  let calls = 0;
  const slowSquare = memoize((n) => { calls++; return n * n; });
  expect(slowSquare(4)).toBe(16);
  expect(slowSquare(4)).toBe(16);
  expect(slowSquare(5)).toBe(25);
  expect(calls).toBe(2);
});

test('bank account keeps a private balance', () => {
  const acct = createBankAccount(100);
  expect(acct.deposit(50)).toBe(150);
  expect(acct.withdraw(30)).toBe(120);
  expect(acct.balance()).toBe(120);
  expect(acct.balance).toBeTypeOf('function');
});

test('cannot overdraw', () => {
  const acct = createBankAccount(10);
  expect(() => acct.withdraw(11)).toThrow('Insufficient funds');
  expect(acct.balance()).toBe(10);
});
