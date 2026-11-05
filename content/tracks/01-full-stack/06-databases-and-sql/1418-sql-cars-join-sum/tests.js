test('returns the expected rows', () => {
  expect(result).toEqual([{"model":"Leaf","total":38},{"model":"Ioniq","total":37},{"model":"Prius","total":37},{"model":"Clio","total":19},{"model":"Model 3","total":19},{"model":"Mazda3","total":14},{"model":"Fiesta","total":3}]);
});
