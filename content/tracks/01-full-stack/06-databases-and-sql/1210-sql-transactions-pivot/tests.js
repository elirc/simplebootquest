test('returns the expected rows', () => {
  expect(result).toEqual([{"reference":"TX-02","views":0,"likes":1,"shares":0},{"reference":"TX-03","views":1,"likes":1,"shares":1},{"reference":"TX-04","views":1,"likes":1,"shares":0},{"reference":"TX-07","views":1,"likes":0,"shares":0},{"reference":"TX-08","views":1,"likes":1,"shares":0},{"reference":"TX-11","views":0,"likes":0,"shares":3},{"reference":"TX-12","views":0,"likes":1,"shares":1}]);
});
