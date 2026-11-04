test('finds books never borrowed', () => {
  expect(result.map((r) => r.title)).toEqual([
    'Going Postal', 'Kafka on the Shore', 'Norwegian Wood', 'Parable of the Sower', 'The Dispossessed', 'The Left Hand of Darkness',
  ]);
});
