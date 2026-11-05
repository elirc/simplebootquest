const MOVIES = [
  {id: 1, title: "Red Harbor", year: 2002, minutes: 152, rating: 4.2, genre: "drama"},
  {id: 2, title: "Quiet Storm", year: 2019, minutes: 145, rating: 7.3, genre: "comedy"},
  {id: 3, title: "Night Train", year: 1981, minutes: 155, rating: 4.9, genre: "thriller"},
  {id: 4, title: "Iron Garden", year: 1990, minutes: 130, rating: 9.4, genre: "sci-fi"},
  {id: 5, title: "Last Light", year: 2013, minutes: 92, rating: 6.5, genre: "comedy"},
  {id: 6, title: "Glass City", year: 2000, minutes: 162, rating: 9.1, genre: "thriller"},
  {id: 7, title: "Blue River", year: 1997, minutes: 110, rating: 4.2, genre: "comedy"},
  {id: 8, title: "Paper Moon", year: 2006, minutes: 96, rating: 4.6, genre: "sci-fi"}
];

test("an empty list", () => {
  expect(highestRating([])).toEqual(null);
});

test("all movies", () => {
  expect(highestRating(MOVIES)).toEqual("Iron Garden");
});
