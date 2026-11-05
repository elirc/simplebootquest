const BEFORE = [
  {id: 1, title: "Cloud Atlas", year: 1994, minutes: 99, rating: 9.4, genre: "drama"},
  {id: 2, title: "Night Train", year: 1999, minutes: 96, rating: 8.6, genre: "drama"},
  {id: 3, title: "Winter Kings", year: 2023, minutes: 93, rating: 6.1, genre: "sci-fi"},
  {id: 4, title: "Iron Garden", year: 1985, minutes: 158, rating: 5.6, genre: "sci-fi"},
  {id: 5, title: "Silver Fox", year: 2008, minutes: 137, rating: 8.8, genre: "comedy"},
  {id: 6, title: "Quiet Storm", year: 1996, minutes: 122, rating: 6.7, genre: "sci-fi"},
  {id: 7, title: "Red Harbor", year: 2013, minutes: 82, rating: 5, genre: "sci-fi"},
  {id: 8, title: "Last Light", year: 1991, minutes: 168, rating: 6.5, genre: "drama"}
];
const AFTER = [
  {id: 1, title: "Cloud Atlas", year: 1994, minutes: 99, rating: 9.4, genre: "drama"},
  {id: 2, title: "Night Train", year: 2006, minutes: 96, rating: 8.6, genre: "drama"},
  {id: 3, title: "Winter Kings", year: 2023, minutes: 93, rating: 6.1, genre: "sci-fi"},
  {id: 4, title: "Iron Garden", year: 1985, minutes: 158, rating: 5.6, genre: "sci-fi"},
  {id: 5, title: "Silver Fox", year: 2015, minutes: 137, rating: 8.8, genre: "comedy"},
  {id: 6, title: "Quiet Storm", year: 1996, minutes: 122, rating: 6.7, genre: "sci-fi"},
  {id: 7, title: "Red Harbor", year: 2013, minutes: 82, rating: 5, genre: "sci-fi"},
  {id: 8, title: "Last Light", year: 1998, minutes: 168, rating: 6.5, genre: "drama"}
];

test("finds changed ids", () => {
  expect(yearChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(yearChanges(BEFORE, BEFORE)).toEqual([]);
});
