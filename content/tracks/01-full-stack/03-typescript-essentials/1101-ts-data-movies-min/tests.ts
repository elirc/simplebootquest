const MOVIES = [
  {id: 1, title: "Cloud Atlas", year: 2005, minutes: 160, rating: 8.5, genre: "thriller"},
  {id: 2, title: "Silver Fox", year: 2000, minutes: 140, rating: 6.3, genre: "sci-fi"},
  {id: 3, title: "Red Harbor", year: 1997, minutes: 140, rating: 5.5, genre: "thriller"},
  {id: 4, title: "Quiet Storm", year: 1995, minutes: 125, rating: 8.9, genre: "sci-fi"},
  {id: 5, title: "Night Train", year: 2019, minutes: 147, rating: 5, genre: "thriller"},
  {id: 6, title: "Paper Moon", year: 1992, minutes: 110, rating: 4.4, genre: "sci-fi"},
  {id: 7, title: "Blue River", year: 2011, minutes: 86, rating: 4.5, genre: "thriller"},
  {id: 8, title: "Glass City", year: 2018, minutes: 169, rating: 7.4, genre: "comedy"}
];

test("an empty list", () => {
  expect(lowestMinutes([])).toEqual(null);
});

test("all movies", () => {
  expect(lowestMinutes(MOVIES)).toEqual("Blue River");
});
