const MOVIES = [
  {id: 1, title: "Last Light", year: 2016, minutes: 122, rating: 8.8, genre: "comedy"},
  {id: 2, title: "Red Harbor", year: 1988, minutes: 109, rating: 7.1, genre: "thriller"},
  {id: 3, title: "Blue River", year: 2010, minutes: 111, rating: 4.5, genre: "drama"},
  {id: 4, title: "Paper Moon", year: 2016, minutes: 112, rating: 6.9, genre: "comedy"},
  {id: 5, title: "Glass City", year: 2009, minutes: 152, rating: 4.5, genre: "thriller"},
  {id: 6, title: "Cloud Atlas", year: 1988, minutes: 94, rating: 9.3, genre: "sci-fi"},
  {id: 7, title: "Silver Fox", year: 1994, minutes: 105, rating: 5.8, genre: "sci-fi"},
  {id: 8, title: "Open Road", year: 2013, minutes: 165, rating: 8.1, genre: "drama"}
];

test("an empty list", () => {
  expect(averageRating([])).toEqual(null);
});

test("all movies", () => {
  expect(averageRating(MOVIES)).toEqual(6.9);
});
