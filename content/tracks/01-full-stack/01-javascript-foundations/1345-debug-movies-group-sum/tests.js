const MOVIES = [
  {id: 1, title: "Open Road", year: 2021, minutes: 175, rating: 7.9, genre: "comedy"},
  {id: 2, title: "Last Light", year: 2011, minutes: 137, rating: 7.2, genre: "comedy"},
  {id: 3, title: "Blue River", year: 2019, minutes: 136, rating: 8.6, genre: "comedy"},
  {id: 4, title: "Red Harbor", year: 1998, minutes: 105, rating: 5.9, genre: "comedy"},
  {id: 5, title: "Cloud Atlas", year: 1983, minutes: 100, rating: 6.7, genre: "sci-fi"},
  {id: 6, title: "Night Train", year: 1999, minutes: 94, rating: 7.1, genre: "drama"},
  {id: 7, title: "Winter Kings", year: 1982, minutes: 106, rating: 6.5, genre: "sci-fi"},
  {id: 8, title: "Quiet Storm", year: 1981, minutes: 172, rating: 9.1, genre: "drama"}
];

test("an empty list", () => {
  expect(ratingPerGenre([])).toEqual({});
});

test("all movies", () => {
  expect(ratingPerGenre(MOVIES)).toEqual({"comedy":29.6,"sci-fi":13.2,"drama":16.2});
});
