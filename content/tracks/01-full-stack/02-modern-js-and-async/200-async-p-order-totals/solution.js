function customerTotals(orders) {
  const byCustomer = orders.reduce((acc, o) => {
    const total = o.items.reduce((s, i) => s + i.price * i.qty, 0);
    const entry = acc.get(o.customer) ?? { customer: o.customer, total: 0, orders: 0 };
    acc.set(o.customer, { ...entry, total: entry.total + total, orders: entry.orders + 1 });
    return acc;
  }, new Map());
  return [...byCustomer.values()].sort((a, b) => b.total - a.total || a.customer.localeCompare(b.customer));
}
