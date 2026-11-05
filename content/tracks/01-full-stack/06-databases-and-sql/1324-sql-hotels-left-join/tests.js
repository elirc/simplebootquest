test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Old Mill","events":3},{"name":"Pine Lodge","events":3},{"name":"Sea Breeze","events":3},{"name":"The Grand","events":3},{"name":"Harbour View","events":2},{"name":"Maple House","events":2},{"name":"Olive Court","events":1},{"name":"Riverside Inn","events":1},{"name":"Sky Garden","events":0}]);
});
