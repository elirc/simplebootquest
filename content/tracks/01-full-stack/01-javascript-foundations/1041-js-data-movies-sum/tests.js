const MOVIES = [
  {id: 1, title: "Glass City", year: 1998, minutes: 161, rating: 5.4, genre: "thriller"},
  {id: 2, title: "Blue River", year: 2008, minutes: 107, rating: 7.5, genre: "sci-fi"},
  {id: 3, title: "Winter Kings", year: 2019, minutes: 127, rating: 8.4, genre: "comedy"},
  {id: 4, title: "Silver Fox", year: 1992, minutes: 146, rating: 6.5, genre: "thriller"},
  {id: 5, title: "Quiet Storm", year: 1993, minutes: 125, rating: 5.3, genre: "thriller"},
  {id: 6, title: "Cloud Atlas", year: 2018, minutes: 100, rating: 6.6, genre: "sci-fi"},
  {id: 7, title: "Open Road", year: 2015, minutes: 155, rating: 8.5, genre: "sci-fi"},
  {id: 8, title: "Paper Moon", year: 1989, minutes: 110, rating: 6.5, genre: "drama"}
];

test("an empty list", () => {
  expect(totalMinutes([])).toEqual(0);
});

test("all movies", () => {
  expect(totalMinutes(MOVIES)).toEqual(1031);
});
