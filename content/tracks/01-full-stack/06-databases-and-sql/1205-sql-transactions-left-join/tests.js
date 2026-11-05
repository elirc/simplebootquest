test('returns the expected rows', () => {
  expect(result).toEqual([{"reference":"TX-03","events":3},{"reference":"TX-11","events":3},{"reference":"TX-04","events":2},{"reference":"TX-08","events":2},{"reference":"TX-12","events":2},{"reference":"TX-02","events":1},{"reference":"TX-07","events":1},{"reference":"TX-06","events":0},{"reference":"TX-10","events":0}]);
});
