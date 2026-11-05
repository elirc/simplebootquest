test('returns the expected rows', () => {
  expect(result).toEqual([{"code":"A-100","band":"medium"},{"code":"A-101","band":"high"},{"code":"A-102","band":"low"},{"code":"B-201","band":"medium"},{"code":"C-300","band":"high"},{"code":"C-302","band":"low"},{"code":"D-401","band":"medium"},{"code":"E-500","band":"medium"},{"code":"E-501","band":"high"}]);
});
