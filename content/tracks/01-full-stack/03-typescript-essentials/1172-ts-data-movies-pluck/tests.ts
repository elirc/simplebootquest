const MOVIES = [
  {id: 1, title: "Open Road", year: 2004, minutes: 119, rating: 5.1, genre: "thriller"},
  {id: 2, title: "Glass City", year: 2001, minutes: 115, rating: 5.8, genre: "sci-fi"},
  {id: 3, title: "Night Train", year: 2019, minutes: 116, rating: 7.9, genre: "drama"},
  {id: 4, title: "Iron Garden", year: 1988, minutes: 89, rating: 6.8, genre: "sci-fi"},
  {id: 5, title: "Paper Moon", year: 1994, minutes: 120, rating: 5.7, genre: "drama"},
  {id: 6, title: "Winter Kings", year: 1997, minutes: 88, rating: 9.2, genre: "drama"},
  {id: 7, title: "Cloud Atlas", year: 2005, minutes: 85, rating: 8.5, genre: "sci-fi"},
  {id: 8, title: "Quiet Storm", year: 1993, minutes: 144, rating: 4.5, genre: "drama"}
];

test("an empty list", () => {
  expect(summariseMovies([])).toEqual([]);
});

test("all movies", () => {
  expect(summariseMovies(MOVIES)).toEqual([{"id":1,"title":"Open Road","minutes":119},{"id":2,"title":"Glass City","minutes":115},{"id":3,"title":"Night Train","minutes":116},{"id":4,"title":"Iron Garden","minutes":89},{"id":5,"title":"Paper Moon","minutes":120},{"id":6,"title":"Winter Kings","minutes":88},{"id":7,"title":"Cloud Atlas","minutes":85},{"id":8,"title":"Quiet Storm","minutes":144}]);
});
