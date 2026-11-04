function summarizeOrders(orders) {
  const paid = orders.filter((o) => o.status === 'paid');
  const revenue = paid.reduce((sum, o) => sum + o.total, 0);
  const idsByStatus = orders.reduce((acc, o) => {
    acc[o.status] = [...(acc[o.status] ?? []), o.id];
    return acc;
  }, {});
  const biggest = orders.reduce((max, o) => (max === undefined || o.total > max.total ? o : max), undefined);
  return {
    count: orders.length,
    revenue,
    averagePaid: paid.length ? revenue / paid.length : 0,
    idsByStatus,
    biggest,
  };
}
