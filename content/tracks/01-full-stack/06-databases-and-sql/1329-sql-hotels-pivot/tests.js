test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"Harbour View","views":1,"likes":0,"shares":1},{"name":"Maple House","views":2,"likes":0,"shares":0},{"name":"Old Mill","views":0,"likes":0,"shares":3},{"name":"Olive Court","views":1,"likes":0,"shares":0},{"name":"Pine Lodge","views":1,"likes":0,"shares":2},{"name":"Riverside Inn","views":1,"likes":0,"shares":0},{"name":"Sea Breeze","views":0,"likes":1,"shares":2},{"name":"The Grand","views":0,"likes":1,"shares":2}]);
});
