const MOVIES = [
  {id: 1, title: "Night Train", year: 2001, minutes: 119, rating: 4.4, genre: "drama"},
  {id: 2, title: "Iron Garden", year: 2013, minutes: 116, rating: 4.8, genre: "comedy"},
  {id: 3, title: "Glass City", year: 2004, minutes: 169, rating: 8.2, genre: "drama"},
  {id: 4, title: "Winter Kings", year: 1983, minutes: 146, rating: 7.7, genre: "drama"},
  {id: 5, title: "Red Harbor", year: 2006, minutes: 171, rating: 6.7, genre: "drama"},
  {id: 6, title: "Last Light", year: 2007, minutes: 121, rating: 8.3, genre: "sci-fi"},
  {id: 7, title: "Silver Fox", year: 2002, minutes: 106, rating: 9.1, genre: "comedy"},
  {id: 8, title: "Paper Moon", year: 2017, minutes: 103, rating: 7.9, genre: "drama"}
];

test("with 2002", () => {
  expect(moviesAbove(MOVIES, 2002)).toEqual(["Iron Garden","Glass City","Red Harbor","Last Light","Paper Moon"]);
});

test("with 2006", () => {
  expect(moviesAbove(MOVIES, 2006)).toEqual(["Iron Garden","Last Light","Paper Moon"]);
});

test("with 999999", () => {
  expect(moviesAbove(MOVIES, 999999)).toEqual([]);
});
