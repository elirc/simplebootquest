const MOVIES = [
  {id: 1, title: "Red Harbor", year: 2014, minutes: 144, rating: 7.3, genre: "thriller"},
  {id: 2, title: "Iron Garden", year: 2022, minutes: 85, rating: 9.3, genre: "drama"},
  {id: 3, title: "Last Light", year: 1987, minutes: 84, rating: 6, genre: "drama"},
  {id: 4, title: "Quiet Storm", year: 2019, minutes: 171, rating: 6.2, genre: "thriller"},
  {id: 5, title: "Open Road", year: 1999, minutes: 139, rating: 5.3, genre: "sci-fi"},
  {id: 6, title: "Blue River", year: 2009, minutes: 127, rating: 7.1, genre: "sci-fi"},
  {id: 7, title: "Night Train", year: 1994, minutes: 154, rating: 6.1, genre: "thriller"},
  {id: 8, title: "Paper Moon", year: 2012, minutes: 98, rating: 7.7, genre: "comedy"}
];

test("with \"Blue River\"", () => {
  expect(yearOf(MOVIES, "Blue River")).toEqual(2009);
});

test("with \"Nope\"", () => {
  expect(yearOf(MOVIES, "Nope")).toEqual(null);
});
