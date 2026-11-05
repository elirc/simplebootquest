test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Open Mic","events":3},{"name":"Demo Day","events":2},{"name":"Startup Night","events":2},{"name":"Workshop","events":2},{"name":"AI Panel","events":1},{"name":"Code Dojo","events":0},{"name":"Design Jam","events":0},{"name":"Game Night","events":0},{"name":"JS Meetup","events":0}]);
});
