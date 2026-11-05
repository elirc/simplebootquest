test('does not mutate the input', () => {
  const before = JSON.stringify(FLIGHTS);
  flightsByDelayMin(FLIGHTS);
  expect(JSON.stringify(FLIGHTS)).toBe(before);
});

test("all flights", () => {
  expect(flightsByDelayMin(FLIGHTS)).toEqual(["AF22","TK1","BA117","EK3","DL15","KL641","SQ25","IB6251"]);
});
