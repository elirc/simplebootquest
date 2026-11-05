test('returns the expected rows', () => {
  expect(result).toEqual([{"genre":"classic","min_pages":164,"max_pages":164},{"genre":"fiction","min_pages":491,"max_pages":491},{"genre":"sci-fi","min_pages":179,"max_pages":715},{"genre":"tech","min_pages":184,"max_pages":582}]);
});
