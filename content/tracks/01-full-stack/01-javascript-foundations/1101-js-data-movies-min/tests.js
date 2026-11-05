const MOVIES = [
  {id: 1, title: "Glass City", year: 2004, minutes: 166, rating: 6.3, genre: "thriller"},
  {id: 2, title: "Quiet Storm", year: 1999, minutes: 148, rating: 4.1, genre: "drama"},
  {id: 3, title: "Night Train", year: 2008, minutes: 136, rating: 9.1, genre: "sci-fi"},
  {id: 4, title: "Cloud Atlas", year: 2005, minutes: 86, rating: 4.6, genre: "comedy"},
  {id: 5, title: "Last Light", year: 2023, minutes: 99, rating: 9.3, genre: "drama"},
  {id: 6, title: "Blue River", year: 1998, minutes: 175, rating: 7.7, genre: "thriller"},
  {id: 7, title: "Silver Fox", year: 2007, minutes: 100, rating: 5.7, genre: "thriller"},
  {id: 8, title: "Iron Garden", year: 1995, minutes: 125, rating: 8.4, genre: "sci-fi"}
];

test("an empty list", () => {
  expect(lowestRating([])).toEqual(null);
});

test("all movies", () => {
  expect(lowestRating(MOVIES)).toEqual("Quiet Storm");
});
