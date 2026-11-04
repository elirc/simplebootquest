function summarize(events) {
  const users = new Set(events.map((e) => e.userId));
  const purchases = events.filter((e) => e.type === 'purchase');

  const revenueByDay = purchases.reduce((acc, e) => {
    const day = e.at.slice(0, 10);
    acc[day] = (acc[day] ?? 0) + e.amount;
    return acc;
  }, {});

  const spend = purchases.reduce((acc, e) => acc.set(e.userId, (acc.get(e.userId) ?? 0) + e.amount), new Map());
  let topSpender = null;
  let top = -Infinity;
  for (const [userId, amount] of spend) {
    if (amount > top) {
      top = amount;
      topSpender = userId;
    }
  }

  return {
    uniqueVisitors: users.size,
    signups: events.filter((e) => e.type === 'signup').length,
    revenue: purchases.reduce((s, e) => s + e.amount, 0),
    revenueByDay,
    conversionRate: users.size ? Math.round((spend.size / users.size) * 100) / 100 : 0,
    topSpender,
  };
}
