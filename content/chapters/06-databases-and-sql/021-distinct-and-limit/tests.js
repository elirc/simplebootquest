test('returns page 2', () => {
  expect(result.map((r) => r.title)).toEqual(['Kafka on the Shore', 'Kindred', 'Norwegian Wood', 'Parable of the Sower']);
});
