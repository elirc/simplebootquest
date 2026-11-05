const MOVIES = [
  {id: 1, title: "Glass City", year: 1984, minutes: 110, rating: 5.6, genre: "thriller"},
  {id: 2, title: "Night Train", year: 2020, minutes: 91, rating: 6.2, genre: "thriller"},
  {id: 3, title: "Quiet Storm", year: 2009, minutes: 105, rating: 5.9, genre: "comedy"},
  {id: 4, title: "Cloud Atlas", year: 1981, minutes: 127, rating: 4.5, genre: "comedy"},
  {id: 5, title: "Red Harbor", year: 1983, minutes: 109, rating: 4.2, genre: "sci-fi"},
  {id: 6, title: "Paper Moon", year: 2000, minutes: 174, rating: 8.1, genre: "sci-fi"},
  {id: 7, title: "Open Road", year: 2024, minutes: 102, rating: 6.7, genre: "comedy"},
  {id: 8, title: "Winter Kings", year: 1988, minutes: 91, rating: 5.9, genre: "sci-fi"}
];

test("an empty list", () => {
  expect(ratingPerGenre([])).toEqual({});
});

test("all movies", () => {
  expect(ratingPerGenre(MOVIES)).toEqual({"thriller":11.8,"comedy":17.1,"sci-fi":18.200000000000003});
});
