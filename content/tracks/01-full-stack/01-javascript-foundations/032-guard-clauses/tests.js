const user = { verified: true, creditLimit: 100 };
const item = (name, price, quantity, stock = 10) => ({ name, price, quantity, stock });

test('requires a verified user', () => {
  expect(checkoutError(null, { items: [] })).toBe('Please log in');
  expect(checkoutError({ verified: false }, { items: [] })).toBe('Please verify your email');
});

test('requires items', () => {
  expect(checkoutError(user, { items: [] })).toBe('Your cart is empty');
});

test('checks stock', () => {
  expect(checkoutError(user, { items: [item('Pen', 1, 1), item('Book', 10, 3, 2)] })).toBe('Book is out of stock');
});

test('checks the credit limit', () => {
  expect(checkoutError(user, { items: [item('Lamp', 60, 2)] })).toBe('Over your credit limit');
});

test('returns null when all is well', () => {
  expect(checkoutError(user, { items: [item('Pen', 2, 5)] })).toBeNull();
});
