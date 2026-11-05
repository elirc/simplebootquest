test('sums into cells', () => {
  const sales = [
    { region: 'north', month: 'jan', amount: 10 },
    { region: 'north', month: 'jan', amount: 20 },
    { region: 'north', month: 'feb', amount: 5 },
    { region: 'south', month: 'jan', amount: 7 },
  ];
  expect(pivot(sales, 'region', 'month', 'amount')).toEqual({ north: { jan: 30, feb: 5 }, south: { jan: 7 } });
});
