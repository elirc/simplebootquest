test('matches title words and author prefix', () => {
  expect(result.map((r) => r.title)).toEqual([
    'Going Postal', 'Guards! Guards!', 'Kafka on the Shore', 'Parable of the Sower', 'Small Gods', 'The Dispossessed', 'The Left Hand of Darkness',
  ]);
});
