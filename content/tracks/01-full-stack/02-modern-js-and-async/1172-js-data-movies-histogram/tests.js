const MOVIES = [
  {id: 1, title: "Winter Kings", year: 2012, minutes: 125, rating: 6.4, genre: "drama"},
  {id: 2, title: "Blue River", year: 2023, minutes: 95, rating: 8.9, genre: "sci-fi"},
  {id: 3, title: "Quiet Storm", year: 2022, minutes: 114, rating: 8.3, genre: "drama"},
  {id: 4, title: "Last Light", year: 1993, minutes: 97, rating: 9.1, genre: "thriller"},
  {id: 5, title: "Paper Moon", year: 2019, minutes: 154, rating: 6.7, genre: "thriller"},
  {id: 6, title: "Cloud Atlas", year: 2010, minutes: 132, rating: 7.6, genre: "sci-fi"},
  {id: 7, title: "Red Harbor", year: 1983, minutes: 146, rating: 9.1, genre: "drama"},
  {id: 8, title: "Glass City", year: 1990, minutes: 112, rating: 6.3, genre: "sci-fi"}
];

test("with 10", () => {
  expect(yearHistogram(MOVIES, 10)).toEqual({"1980":1,"1990":2,"2010":3,"2020":2});
});

test("with 20", () => {
  expect(yearHistogram(MOVIES, 20)).toEqual({"1980":3,"2000":3,"2020":2});
});
