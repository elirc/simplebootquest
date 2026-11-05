const MOVIES = [
  {id: 1, title: "Open Road", year: 2006, minutes: 174, rating: 5.5, genre: "thriller"},
  {id: 2, title: "Glass City", year: 1996, minutes: 112, rating: 7.7, genre: "comedy"},
  {id: 3, title: "Quiet Storm", year: 2013, minutes: 90, rating: 9, genre: "drama"},
  {id: 4, title: "Night Train", year: 1987, minutes: 130, rating: 6.7, genre: "thriller"},
  {id: 5, title: "Silver Fox", year: 1984, minutes: 141, rating: 6.4, genre: "comedy"},
  {id: 6, title: "Paper Moon", year: 2023, minutes: 174, rating: 8.6, genre: "drama"},
  {id: 7, title: "Red Harbor", year: 2016, minutes: 88, rating: 6.9, genre: "thriller"},
  {id: 8, title: "Blue River", year: 2011, minutes: 155, rating: 8.4, genre: "comedy"}
];

test("an empty list", () => {
  expect(summariseMovies([])).toEqual([]);
});

test("all movies", () => {
  expect(summariseMovies(MOVIES)).toEqual([{"id":1,"title":"Open Road","year":2006},{"id":2,"title":"Glass City","year":1996},{"id":3,"title":"Quiet Storm","year":2013},{"id":4,"title":"Night Train","year":1987},{"id":5,"title":"Silver Fox","year":1984},{"id":6,"title":"Paper Moon","year":2023},{"id":7,"title":"Red Harbor","year":2016},{"id":8,"title":"Blue River","year":2011}]);
});
