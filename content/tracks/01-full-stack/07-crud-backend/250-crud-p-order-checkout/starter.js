function prepareOrder(cart, products) {
  const lines = cart.map((c) => ({ productId: c.productId, quantity: c.quantity, unitPriceCents: c.priceCents }));
  return { ok: true, lines, totalCents: 0 };
}
