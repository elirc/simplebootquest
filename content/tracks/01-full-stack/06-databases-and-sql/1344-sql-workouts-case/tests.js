test('returns the expected rows', () => {
  expect(result).toEqual([{"label":"Fri run","band":"medium"},{"label":"Fri yoga","band":"high"},{"label":"Sat ride","band":"medium"},{"label":"Sun walk","band":"low"},{"label":"Thu ride","band":"high"},{"label":"Thu yoga","band":"low"},{"label":"Tue swim","band":"medium"},{"label":"Wed lift","band":"high"},{"label":"Wed swim","band":"medium"}]);
});
