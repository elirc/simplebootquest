const MOVIES = [
  {id: 1, title: "Cloud Atlas", year: 2011, minutes: 133, rating: 7.1, genre: "sci-fi"},
  {id: 2, title: "Blue River", year: 2019, minutes: 151, rating: 7.5, genre: "thriller"},
  {id: 3, title: "Iron Garden", year: 2023, minutes: 132, rating: 8.8, genre: "thriller"},
  {id: 4, title: "Quiet Storm", year: 2023, minutes: 161, rating: 4.5, genre: "thriller"},
  {id: 5, title: "Open Road", year: 1994, minutes: 162, rating: 4.5, genre: "drama"},
  {id: 6, title: "Red Harbor", year: 1993, minutes: 155, rating: 7.5, genre: "comedy"},
  {id: 7, title: "Paper Moon", year: 2009, minutes: 130, rating: 6.9, genre: "drama"},
  {id: 8, title: "Silver Fox", year: 1994, minutes: 135, rating: 5.8, genre: "sci-fi"}
];

test("with \"drama\"", () => {
  expect(moviesInGenreRanked(MOVIES, "drama")).toEqual(["Paper Moon","Open Road"]);
});

test("with \"comedy\"", () => {
  expect(moviesInGenreRanked(MOVIES, "comedy")).toEqual(["Red Harbor"]);
});

test("with \"sci-fi\"", () => {
  expect(moviesInGenreRanked(MOVIES, "sci-fi")).toEqual(["Cloud Atlas","Silver Fox"]);
});
