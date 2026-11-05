test('returns the expected rows', () => {
  expect(result).toEqual([{"title":"Echoes","views":1,"likes":1,"shares":1},{"title":"Halo","views":0,"likes":1,"shares":1},{"title":"Lanterns","views":0,"likes":1,"shares":2},{"title":"Riverside","views":0,"likes":1,"shares":1},{"title":"Static","views":1,"likes":0,"shares":1},{"title":"Sunrise","views":0,"likes":0,"shares":2},{"title":"Velvet","views":1,"likes":0,"shares":1}]);
});
