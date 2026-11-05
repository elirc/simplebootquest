const MOVIES = [
  {id: 1, title: "Cloud Atlas", year: 2004, minutes: 153, rating: 7.1, genre: "drama"},
  {id: 2, title: "Night Train", year: 1986, minutes: 152, rating: 5.1, genre: "thriller"},
  {id: 3, title: "Blue River", year: 1989, minutes: 133, rating: 7.4, genre: "thriller"},
  {id: 4, title: "Quiet Storm", year: 2014, minutes: 114, rating: 5.4, genre: "comedy"},
  {id: 5, title: "Silver Fox", year: 1991, minutes: 117, rating: 4.5, genre: "drama"},
  {id: 6, title: "Glass City", year: 1981, minutes: 130, rating: 5.6, genre: "thriller"},
  {id: 7, title: "Last Light", year: 2004, minutes: 101, rating: 5, genre: "thriller"},
  {id: 8, title: "Iron Garden", year: 2002, minutes: 86, rating: 6.8, genre: "comedy"}
];

test("with \"ui\"", () => {
  expect(searchMovies(MOVIES, "ui")).toEqual(["Quiet Storm"]);
});

test("with \"UI\"", () => {
  expect(searchMovies(MOVIES, "UI")).toEqual(["Quiet Storm"]);
});

test("with \"  \"", () => {
  expect(searchMovies(MOVIES, "  ")).toEqual(["Cloud Atlas","Night Train","Blue River","Quiet Storm","Silver Fox","Glass City","Last Light","Iron Garden"]);
});

test("with \"zzz\"", () => {
  expect(searchMovies(MOVIES, "zzz")).toEqual([]);
});
