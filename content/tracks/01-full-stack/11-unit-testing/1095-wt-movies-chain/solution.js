test("with \"drama\"", () => {
  expect(moviesInGenreRanked(MOVIES, "drama")).toEqual(["Red Harbor","Night Train","Glass City"]);
});

test("with \"comedy\"", () => {
  expect(moviesInGenreRanked(MOVIES, "comedy")).toEqual(["Silver Fox"]);
});

test("with \"sci-fi\"", () => {
  expect(moviesInGenreRanked(MOVIES, "sci-fi")).toEqual(["Blue River"]);
});
