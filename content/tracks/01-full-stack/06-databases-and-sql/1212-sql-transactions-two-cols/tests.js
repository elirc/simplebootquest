test('returns the expected rows', () => {
  expect(result).toEqual([{"reference":"TX-10","amount":942,"day":3},{"reference":"TX-02","amount":999,"day":5},{"reference":"TX-03","amount":460,"day":6},{"reference":"TX-11","amount":-18,"day":7},{"reference":"TX-12","amount":715,"day":12},{"reference":"TX-04","amount":648,"day":12},{"reference":"TX-07","amount":-234,"day":17},{"reference":"TX-06","amount":950,"day":18},{"reference":"TX-08","amount":570,"day":21}]);
});
