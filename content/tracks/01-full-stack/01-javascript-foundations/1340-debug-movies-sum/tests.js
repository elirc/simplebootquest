const MOVIES = [
  {id: 1, title: "Blue River", year: 1997, minutes: 134, rating: 4.6, genre: "comedy"},
  {id: 2, title: "Quiet Storm", year: 1980, minutes: 103, rating: 8.2, genre: "sci-fi"},
  {id: 3, title: "Cloud Atlas", year: 1995, minutes: 141, rating: 4.1, genre: "sci-fi"},
  {id: 4, title: "Night Train", year: 2001, minutes: 170, rating: 6.8, genre: "drama"},
  {id: 5, title: "Red Harbor", year: 2001, minutes: 85, rating: 4.7, genre: "comedy"},
  {id: 6, title: "Winter Kings", year: 2006, minutes: 139, rating: 4.9, genre: "comedy"},
  {id: 7, title: "Glass City", year: 2002, minutes: 154, rating: 7.6, genre: "comedy"},
  {id: 8, title: "Iron Garden", year: 2024, minutes: 99, rating: 6.9, genre: "comedy"}
];

test("an empty list", () => {
  expect(totalYear([])).toEqual(0);
});

test("all movies", () => {
  expect(totalYear(MOVIES)).toEqual(16006);
});
