test('returns the expected rows', () => {
  expect(result).toEqual([{"genre":"classic","title":"Kindred","pages":164,"rank":1},{"genre":"fiction","title":"Persuasion","pages":491,"rank":1},{"genre":"sci-fi","title":"Siddhartha","pages":715,"rank":1},{"genre":"sci-fi","title":"Ulysses","pages":454,"rank":2},{"genre":"sci-fi","title":"Matilda","pages":242,"rank":3},{"genre":"sci-fi","title":"Rebecca","pages":179,"rank":4},{"genre":"tech","title":"Clean Code","pages":582,"rank":1},{"genre":"tech","title":"Walden","pages":576,"rank":2},{"genre":"tech","title":"Dune","pages":184,"rank":3}]);
});
