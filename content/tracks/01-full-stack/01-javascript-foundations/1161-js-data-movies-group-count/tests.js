const MOVIES = [
  {id: 1, title: "Red Harbor", year: 2000, minutes: 93, rating: 6.2, genre: "comedy"},
  {id: 2, title: "Night Train", year: 1983, minutes: 100, rating: 8.9, genre: "comedy"},
  {id: 3, title: "Iron Garden", year: 2013, minutes: 147, rating: 8.8, genre: "thriller"},
  {id: 4, title: "Blue River", year: 2004, minutes: 154, rating: 4.1, genre: "thriller"},
  {id: 5, title: "Quiet Storm", year: 2010, minutes: 130, rating: 8.6, genre: "thriller"},
  {id: 6, title: "Glass City", year: 1982, minutes: 100, rating: 7.4, genre: "comedy"},
  {id: 7, title: "Silver Fox", year: 1999, minutes: 113, rating: 4.4, genre: "drama"},
  {id: 8, title: "Open Road", year: 1987, minutes: 97, rating: 6.6, genre: "thriller"}
];

test("an empty list", () => {
  expect(countMoviesPerGenre([])).toEqual({});
});

test("all movies", () => {
  expect(countMoviesPerGenre(MOVIES)).toEqual({"comedy":3,"thriller":4,"drama":1});
});
