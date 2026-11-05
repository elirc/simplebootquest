function setup({ chargeFails = false } = {}) {
  const payments = {
    charge: chargeFails ? vi.fn().mockRejectedValue(new Error('Card declined')) : vi.fn().mockResolvedValue({ id: 'ch_1' }),
  };
  const mailer = { send: vi.fn().mockResolvedValue(undefined) };
  const order = { customerId: 'cus_9', email: 'a@b.co', items: [{ price: 1000, qty: 2 }, { price: 500, qty: 1 }] };
  return { payments, mailer, order };
}

describe('placeOrder', () => {
  test('charges the customer the order total', async () => {
    const { payments, mailer, order } = setup();
    await placeOrder(order, { payments, mailer });
    expect(payments.charge).toHaveBeenCalledTimes(1);
    expect(payments.charge).toHaveBeenCalledWith('cus_9', 2500);
  });

  test('emails a confirmation and returns the charge id', async () => {
    const { payments, mailer, order } = setup();
    expect(await placeOrder(order, { payments, mailer })).toEqual({ ok: true, chargeId: 'ch_1' });
    expect(mailer.send).toHaveBeenCalledWith('a@b.co', 'Order confirmed', 'ch_1');
  });

  test('does not email when the charge fails', async () => {
    const { payments, mailer, order } = setup({ chargeFails: true });
    expect(await placeOrder(order, { payments, mailer })).toEqual({ ok: false, error: 'Card declined' });
    expect(mailer.send).not.toHaveBeenCalled();
  });

  test('refuses empty orders without charging', async () => {
    const { payments, mailer, order } = setup();
    await expect(placeOrder({ ...order, items: [] }, { payments, mailer })).rejects.toThrow('Order is empty');
    expect(payments.charge).not.toHaveBeenCalled();
  });
});
