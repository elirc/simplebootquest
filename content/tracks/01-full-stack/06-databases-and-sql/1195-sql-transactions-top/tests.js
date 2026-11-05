test('returns the expected rows', () => {
  expect(result).toEqual([{"reference":"TX-02","amount":999},{"reference":"TX-06","amount":950},{"reference":"TX-10","amount":942}]);
});
