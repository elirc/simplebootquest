test('does not mutate the input', () => {
  const before = JSON.stringify(EVENTS);
  topEventsByCapacity(EVENTS, 1);
  expect(JSON.stringify(EVENTS)).toBe(before);
});

test("with 1", () => {
  expect(topEventsByCapacity(EVENTS, 1)).toEqual(["Game Night"]);
});

test("with 3", () => {
  expect(topEventsByCapacity(EVENTS, 3)).toEqual(["Game Night","AI Panel","Open Mic"]);
});

test("with 0", () => {
  expect(topEventsByCapacity(EVENTS, 0)).toEqual([]);
});
