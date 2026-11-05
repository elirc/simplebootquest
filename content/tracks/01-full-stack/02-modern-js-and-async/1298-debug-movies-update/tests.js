const MOVIES = [
  {id: 1, title: "Blue River", year: 1992, minutes: 120, rating: 7.3, genre: "comedy"},
  {id: 2, title: "Open Road", year: 2018, minutes: 142, rating: 6.5, genre: "sci-fi"},
  {id: 3, title: "Iron Garden", year: 2005, minutes: 90, rating: 7, genre: "sci-fi"},
  {id: 4, title: "Last Light", year: 1995, minutes: 124, rating: 8.9, genre: "sci-fi"},
  {id: 5, title: "Red Harbor", year: 1986, minutes: 120, rating: 8.3, genre: "sci-fi"},
  {id: 6, title: "Winter Kings", year: 1987, minutes: 95, rating: 7.4, genre: "drama"},
  {id: 7, title: "Silver Fox", year: 2021, minutes: 136, rating: 7.1, genre: "drama"},
  {id: 8, title: "Cloud Atlas", year: 2019, minutes: 139, rating: 5.6, genre: "drama"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(MOVIES);
  bumpRating(MOVIES, "drama", 10);
  expect(JSON.stringify(MOVIES)).toBe(before);
});

test("with \"drama\", 10", () => {
  expect(bumpRating(MOVIES, "drama", 10)).toEqual([{"id":1,"title":"Blue River","year":1992,"minutes":120,"rating":7.3,"genre":"comedy"},{"id":2,"title":"Open Road","year":2018,"minutes":142,"rating":6.5,"genre":"sci-fi"},{"id":3,"title":"Iron Garden","year":2005,"minutes":90,"rating":7,"genre":"sci-fi"},{"id":4,"title":"Last Light","year":1995,"minutes":124,"rating":8.9,"genre":"sci-fi"},{"id":5,"title":"Red Harbor","year":1986,"minutes":120,"rating":8.3,"genre":"sci-fi"},{"id":6,"title":"Winter Kings","year":1987,"minutes":95,"rating":17.4,"genre":"drama"},{"id":7,"title":"Silver Fox","year":2021,"minutes":136,"rating":17.1,"genre":"drama"},{"id":8,"title":"Cloud Atlas","year":2019,"minutes":139,"rating":15.6,"genre":"drama"}]);
});

test("with \"comedy\", 1", () => {
  expect(bumpRating(MOVIES, "comedy", 1)).toEqual([{"id":1,"title":"Blue River","year":1992,"minutes":120,"rating":8.3,"genre":"comedy"},{"id":2,"title":"Open Road","year":2018,"minutes":142,"rating":6.5,"genre":"sci-fi"},{"id":3,"title":"Iron Garden","year":2005,"minutes":90,"rating":7,"genre":"sci-fi"},{"id":4,"title":"Last Light","year":1995,"minutes":124,"rating":8.9,"genre":"sci-fi"},{"id":5,"title":"Red Harbor","year":1986,"minutes":120,"rating":8.3,"genre":"sci-fi"},{"id":6,"title":"Winter Kings","year":1987,"minutes":95,"rating":7.4,"genre":"drama"},{"id":7,"title":"Silver Fox","year":2021,"minutes":136,"rating":7.1,"genre":"drama"},{"id":8,"title":"Cloud Atlas","year":2019,"minutes":139,"rating":5.6,"genre":"drama"}]);
});
