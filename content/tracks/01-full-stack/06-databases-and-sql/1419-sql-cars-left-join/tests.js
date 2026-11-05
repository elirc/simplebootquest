test('returns the expected rows', () => {
  expect(result).toEqual([{"model":"Leaf","events":3},{"model":"Prius","events":3},{"model":"Clio","events":2},{"model":"Ioniq","events":2},{"model":"Mazda3","events":2},{"model":"Fiesta","events":1},{"model":"Model 3","events":1},{"model":"Golf","events":0},{"model":"Polo","events":0}]);
});
