function fakeApi({ failCharge = false } = {}) {
  const log = [];
  const step = (name, value, ms = 10) => async () => {
    log.push(`start:${name}`);
    await sleep(ms);
    if (name === 'charge' && failCharge) throw new Error('card declined');
    log.push(`end:${name}`);
    return value;
  };
  return {
    log,
    validateStock: step('validate', true),
    getCustomer: step('customer', { email: 'a@x.io' }),
    charge: step('charge', { id: 'pay_1' }),
    sendReceipt: step('receipt', true),
    reserveStock: step('reserve', true),
  };
}
const cart = { customerId: 1, items: [{ price: 10, qty: 2 }, { price: 5, qty: 1 }] };

test('returns the payment and total', async () => {
  expect(await checkout(fakeApi(), cart)).toEqual({ paymentId: 'pay_1', total: 25 });
});

test('runs independent steps in parallel and dependent ones in order', async () => {
  const api = fakeApi();
  await checkout(api, cart);
  expect(api.log.slice(0, 2).sort()).toEqual(['start:customer', 'start:validate']);
  const chargeStart = api.log.indexOf('start:charge');
  expect(chargeStart).toBeGreaterThan(api.log.indexOf('end:customer'));
  expect(chargeStart).toBeGreaterThan(api.log.indexOf('end:validate'));
  const after = api.log.slice(api.log.indexOf('end:charge') + 1, api.log.indexOf('end:charge') + 3).sort();
  expect(after).toEqual(['start:receipt', 'start:reserve']);
});

test('stops when a step fails', async () => {
  const api = fakeApi({ failCharge: true });
  await expect(checkout(api, cart)).rejects.toThrow('card declined');
  expect(api.log).not.toContain('start:receipt');
});
