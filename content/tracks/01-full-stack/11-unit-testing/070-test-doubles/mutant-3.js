// mutant: charges the wrong customer field
async function placeOrder(order, { payments, mailer }) {
  if (order.items.length === 0) throw new Error('Order is empty');
  const total = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  let charge;
  try {
    charge = await payments.charge(order.email, total);
  } catch (err) {
    return { ok: false, error: err.message };
  }
  await mailer.send(order.email, 'Order confirmed', charge.id);
  return { ok: true, chargeId: charge.id };
}
