const MOVIES = [
  {id: 1, title: "Last Light", year: 2024, minutes: 87, rating: 5.2, genre: "drama"},
  {id: 2, title: "Red Harbor", year: 2004, minutes: 100, rating: 4.8, genre: "sci-fi"},
  {id: 3, title: "Quiet Storm", year: 2023, minutes: 95, rating: 5, genre: "thriller"},
  {id: 4, title: "Open Road", year: 2001, minutes: 149, rating: 4.6, genre: "comedy"},
  {id: 5, title: "Cloud Atlas", year: 1981, minutes: 156, rating: 4.3, genre: "drama"},
  {id: 6, title: "Night Train", year: 2009, minutes: 96, rating: 6.9, genre: "comedy"},
  {id: 7, title: "Glass City", year: 2021, minutes: 145, rating: 4.8, genre: "comedy"},
  {id: 8, title: "Blue River", year: 1981, minutes: 167, rating: 6.5, genre: "thriller"}
];

test("an empty list", () => {
  expect(averageMinutes([])).toEqual(null);
});

test("all movies", () => {
  expect(averageMinutes(MOVIES)).toEqual(124.4);
});
