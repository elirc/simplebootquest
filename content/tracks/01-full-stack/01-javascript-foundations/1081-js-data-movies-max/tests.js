const MOVIES = [
  {id: 1, title: "Silver Fox", year: 2000, minutes: 100, rating: 8.2, genre: "thriller"},
  {id: 2, title: "Cloud Atlas", year: 2013, minutes: 155, rating: 6, genre: "thriller"},
  {id: 3, title: "Glass City", year: 1993, minutes: 117, rating: 5.8, genre: "drama"},
  {id: 4, title: "Open Road", year: 1997, minutes: 142, rating: 6.2, genre: "thriller"},
  {id: 5, title: "Iron Garden", year: 1989, minutes: 115, rating: 4.8, genre: "comedy"},
  {id: 6, title: "Winter Kings", year: 2023, minutes: 98, rating: 7.7, genre: "thriller"},
  {id: 7, title: "Blue River", year: 1990, minutes: 132, rating: 7, genre: "thriller"},
  {id: 8, title: "Night Train", year: 2020, minutes: 91, rating: 9.2, genre: "sci-fi"}
];

test("an empty list", () => {
  expect(highestYear([])).toEqual(null);
});

test("all movies", () => {
  expect(highestYear(MOVIES)).toEqual("Winter Kings");
});
