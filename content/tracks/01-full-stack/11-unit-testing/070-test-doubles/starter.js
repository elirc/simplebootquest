test('charges the customer', async () => {
  const payments = { charge: vi.fn().mockResolvedValue({ id: 'ch_1' }) };
  const mailer = { send: vi.fn() };
  const order = { customerId: 'cus_9', email: 'a@b.co', items: [{ price: 1000, qty: 1 }] };
  await placeOrder(order, { payments, mailer });
  expect(payments.charge).toHaveBeenCalled();
});
