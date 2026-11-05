test('returns the expected rows', () => {
  expect(result).toEqual([{"subject":"Bug in export","views":3,"likes":0,"shares":0},{"subject":"Email change","views":2,"likes":0,"shares":1},{"subject":"Feature idea","views":0,"likes":1,"shares":1},{"subject":"Login fails","views":0,"likes":1,"shares":0},{"subject":"Missing order","views":2,"likes":0,"shares":1},{"subject":"Password reset","views":1,"likes":0,"shares":1},{"subject":"Refund request","views":3,"likes":0,"shares":0},{"subject":"Slow page","views":1,"likes":0,"shares":1}]);
});
