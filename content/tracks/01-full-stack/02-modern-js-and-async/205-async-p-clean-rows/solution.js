function cleanRows(rows) {
  const seen = new Set();
  return rows
    .map((r) => ({ name: (r.name ?? '').trim(), price: Number(r.price), stockText: (r.stock ?? '').trim() }))
    .filter((r) => r.name !== '' && r.price >= 0 && (r.stockText === '' || /^\d+$/.test(r.stockText)))
    .filter((r) => {
      const key = r.name.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map((r) => ({ name: r.name, priceCents: Math.round(r.price * 100), stock: r.stockText === '' ? 0 : Number(r.stockText) }));
}
