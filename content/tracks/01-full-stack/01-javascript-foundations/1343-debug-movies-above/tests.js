const MOVIES = [
  {id: 1, title: "Cloud Atlas", year: 1992, minutes: 143, rating: 4.3, genre: "thriller"},
  {id: 2, title: "Paper Moon", year: 2014, minutes: 136, rating: 9.3, genre: "thriller"},
  {id: 3, title: "Glass City", year: 1999, minutes: 153, rating: 8.1, genre: "drama"},
  {id: 4, title: "Winter Kings", year: 1994, minutes: 151, rating: 6.7, genre: "thriller"},
  {id: 5, title: "Iron Garden", year: 2022, minutes: 105, rating: 8.1, genre: "drama"},
  {id: 6, title: "Silver Fox", year: 2002, minutes: 87, rating: 8.6, genre: "drama"},
  {id: 7, title: "Red Harbor", year: 2007, minutes: 174, rating: 7.3, genre: "drama"},
  {id: 8, title: "Quiet Storm", year: 2007, minutes: 92, rating: 6.4, genre: "comedy"}
];

test("with 1999", () => {
  expect(moviesAbove(MOVIES, 1999)).toEqual(["Paper Moon","Iron Garden","Silver Fox","Red Harbor","Quiet Storm"]);
});

test("with 2007", () => {
  expect(moviesAbove(MOVIES, 2007)).toEqual(["Paper Moon","Iron Garden"]);
});

test("with 999999", () => {
  expect(moviesAbove(MOVIES, 999999)).toEqual([]);
});
