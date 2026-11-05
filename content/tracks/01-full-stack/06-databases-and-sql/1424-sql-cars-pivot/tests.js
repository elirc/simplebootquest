test('returns the expected rows', () => {
  expect(result).toEqual([{"model":"Clio","views":1,"likes":0,"shares":1},{"model":"Fiesta","views":1,"likes":0,"shares":0},{"model":"Ioniq","views":1,"likes":0,"shares":1},{"model":"Leaf","views":2,"likes":1,"shares":0},{"model":"Mazda3","views":2,"likes":0,"shares":0},{"model":"Model 3","views":1,"likes":0,"shares":0},{"model":"Prius","views":0,"likes":1,"shares":2}]);
});
