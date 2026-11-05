test('does not mutate the input', () => {
  const before = JSON.stringify(FLIGHTS);
  topFlightsByDelayMin(FLIGHTS, 1);
  expect(JSON.stringify(FLIGHTS)).toBe(before);
});

test("with 1", () => {
  expect(topFlightsByDelayMin(FLIGHTS, 1)).toEqual(["LH400"]);
});

test("with 3", () => {
  expect(topFlightsByDelayMin(FLIGHTS, 3)).toEqual(["LH400","TK1","QF1"]);
});

test("with 0", () => {
  expect(topFlightsByDelayMin(FLIGHTS, 0)).toEqual([]);
});
