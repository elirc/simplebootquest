test('does not mutate the input', () => {
  const before = JSON.stringify(MOVIES);
  moviesByMinutes(MOVIES);
  expect(JSON.stringify(MOVIES)).toBe(before);
});

test("all movies", () => {
  expect(moviesByMinutes(MOVIES)).toEqual(["Paper Moon","Winter Kings","Last Light","Glass City","Quiet Storm","Silver Fox","Open Road","Cloud Atlas"]);
});
