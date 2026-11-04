async function checkout(api, cart) {
  const [, customer] = await Promise.all([api.validateStock(cart.items), api.getCustomer(cart.customerId)]);
  const total = cart.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const payment = await api.charge(customer, total);
  await Promise.all([api.sendReceipt(customer.email, payment.id), api.reserveStock(cart.items)]);
  return { paymentId: payment.id, total };
}
