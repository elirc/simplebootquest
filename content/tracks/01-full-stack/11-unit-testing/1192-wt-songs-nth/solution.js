test("with 1", () => {
  expect(nthByPlays(SONGS, 1)).toEqual("Gravity");
});

test("with 2", () => {
  expect(nthByPlays(SONGS, 2)).toEqual("Echoes");
});

test("with 5", () => {
  expect(nthByPlays(SONGS, 5)).toEqual("Neon");
});

test("with 0", () => {
  expect(nthByPlays(SONGS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByPlays(SONGS, 99)).toEqual(null);
});
