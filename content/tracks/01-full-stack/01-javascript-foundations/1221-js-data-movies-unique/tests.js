const MOVIES = [
  {id: 1, title: "Red Harbor", year: 2024, minutes: 168, rating: 6.6, genre: "sci-fi"},
  {id: 2, title: "Open Road", year: 2006, minutes: 111, rating: 6.8, genre: "thriller"},
  {id: 3, title: "Glass City", year: 2004, minutes: 132, rating: 5.8, genre: "thriller"},
  {id: 4, title: "Quiet Storm", year: 1997, minutes: 151, rating: 6.5, genre: "sci-fi"},
  {id: 5, title: "Winter Kings", year: 1983, minutes: 120, rating: 5.3, genre: "comedy"},
  {id: 6, title: "Silver Fox", year: 2022, minutes: 163, rating: 8.8, genre: "thriller"},
  {id: 7, title: "Blue River", year: 2009, minutes: 116, rating: 4.9, genre: "thriller"},
  {id: 8, title: "Last Light", year: 1996, minutes: 84, rating: 5.1, genre: "comedy"}
];

test("an empty list", () => {
  expect(distinctGenres([])).toEqual([]);
});

test("all movies", () => {
  expect(distinctGenres(MOVIES)).toEqual(["comedy","sci-fi","thriller"]);
});
