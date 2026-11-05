function prepareOrder(cart, products) {
  if (cart.length === 0) return { ok: false, errors: ['Cart is empty'] };
  const merged = new Map();
  const invalid = new Set();
  for (const { productId, quantity } of cart) {
    if (!Number.isInteger(quantity) || quantity < 1) invalid.add(productId);
    merged.set(productId, (merged.get(productId) ?? 0) + (Number.isInteger(quantity) ? quantity : 0));
  }
  const byId = new Map(products.map((p) => [p.id, p]));
  const errors = [];
  const lines = [];
  for (const [productId, quantity] of merged) {
    const product = byId.get(productId);
    if (invalid.has(productId)) errors.push(`Invalid quantity for product ${productId}`);
    else if (!product) errors.push(`Product ${productId} not found`);
    else if (quantity > product.stock) errors.push(`Only ${product.stock} left of ${product.name}`);
    else lines.push({ productId, name: product.name, quantity, unitPriceCents: product.priceCents, lineTotalCents: quantity * product.priceCents });
  }
  if (errors.length) return { ok: false, errors };
  return { ok: true, lines, totalCents: lines.reduce((sum, l) => sum + l.lineTotalCents, 0) };
}
