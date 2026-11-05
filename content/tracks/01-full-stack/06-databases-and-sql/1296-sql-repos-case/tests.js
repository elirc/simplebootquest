test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"api-gateway","band":"high"},{"name":"billing","band":"medium"},{"name":"cli","band":"high"},{"name":"design-system","band":"low"},{"name":"docs","band":"medium"},{"name":"infra","band":"medium"},{"name":"notifier","band":"low"},{"name":"search","band":"medium"},{"name":"web-app","band":"high"}]);
});
