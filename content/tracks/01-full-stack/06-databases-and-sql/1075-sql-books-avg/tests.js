test('returns the expected rows', () => {
  expect(result).toEqual([{"genre":"classic","avg_pages":164},{"genre":"fiction","avg_pages":491},{"genre":"sci-fi","avg_pages":397.5},{"genre":"tech","avg_pages":447.3}]);
});
