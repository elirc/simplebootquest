test('returns the expected rows', () => {
  expect(result).toEqual([{"label":"Tue swim","minutes":85,"calories":141},{"label":"Fri yoga","minutes":107,"calories":168},{"label":"Sun walk","minutes":18,"calories":242},{"label":"Thu ride","minutes":106,"calories":353},{"label":"Wed lift","minutes":98,"calories":532},{"label":"Fri run","minutes":34,"calories":569},{"label":"Sat ride","minutes":25,"calories":629},{"label":"Wed swim","minutes":72,"calories":753},{"label":"Thu yoga","minutes":20,"calories":787}]);
});
