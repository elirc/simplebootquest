test('returns the expected rows', () => {
  expect(result).toEqual([{"title":"Clean Code","views":1,"likes":1,"shares":1},{"title":"Dune","views":1,"likes":1,"shares":0},{"title":"Kindred","views":0,"likes":2,"shares":0},{"title":"Matilda","views":0,"likes":2,"shares":0},{"title":"Persuasion","views":0,"likes":0,"shares":1},{"title":"Rebecca","views":0,"likes":0,"shares":1},{"title":"Siddhartha","views":1,"likes":1,"shares":0},{"title":"Ulysses","views":1,"likes":0,"shares":1},{"title":"Walden","views":0,"likes":2,"shares":0}]);
});
