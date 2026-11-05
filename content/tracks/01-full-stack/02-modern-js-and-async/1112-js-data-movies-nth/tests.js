const MOVIES = [
  {id: 1, title: "Cloud Atlas", year: 1987, minutes: 104, rating: 6.3, genre: "sci-fi"},
  {id: 2, title: "Last Light", year: 2011, minutes: 171, rating: 6.6, genre: "drama"},
  {id: 3, title: "Winter Kings", year: 1995, minutes: 107, rating: 6.8, genre: "comedy"},
  {id: 4, title: "Glass City", year: 1998, minutes: 137, rating: 5.7, genre: "thriller"},
  {id: 5, title: "Open Road", year: 2017, minutes: 157, rating: 5.8, genre: "comedy"},
  {id: 6, title: "Red Harbor", year: 2023, minutes: 161, rating: 8.1, genre: "sci-fi"},
  {id: 7, title: "Night Train", year: 1986, minutes: 165, rating: 7.6, genre: "thriller"},
  {id: 8, title: "Blue River", year: 2009, minutes: 125, rating: 7.6, genre: "comedy"}
];

test("with 1", () => {
  expect(nthByMinutes(MOVIES, 1)).toEqual("Last Light");
});

test("with 2", () => {
  expect(nthByMinutes(MOVIES, 2)).toEqual("Night Train");
});

test("with 5", () => {
  expect(nthByMinutes(MOVIES, 5)).toEqual("Glass City");
});

test("with 0", () => {
  expect(nthByMinutes(MOVIES, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByMinutes(MOVIES, 99)).toEqual(null);
});
