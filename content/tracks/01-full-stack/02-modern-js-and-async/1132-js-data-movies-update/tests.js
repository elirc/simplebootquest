const MOVIES = [
  {id: 1, title: "Winter Kings", year: 2009, minutes: 151, rating: 7.7, genre: "thriller"},
  {id: 2, title: "Red Harbor", year: 2014, minutes: 93, rating: 7.4, genre: "sci-fi"},
  {id: 3, title: "Glass City", year: 1996, minutes: 167, rating: 4.3, genre: "sci-fi"},
  {id: 4, title: "Quiet Storm", year: 2009, minutes: 119, rating: 4.6, genre: "thriller"},
  {id: 5, title: "Paper Moon", year: 2003, minutes: 165, rating: 8.4, genre: "thriller"},
  {id: 6, title: "Silver Fox", year: 1986, minutes: 151, rating: 7.9, genre: "drama"},
  {id: 7, title: "Blue River", year: 2012, minutes: 160, rating: 7.8, genre: "comedy"},
  {id: 8, title: "Night Train", year: 2020, minutes: 120, rating: 4.3, genre: "thriller"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(MOVIES);
  bumpYear(MOVIES, "drama", 10);
  expect(JSON.stringify(MOVIES)).toBe(before);
});

test("with \"drama\", 10", () => {
  expect(bumpYear(MOVIES, "drama", 10)).toEqual([{"id":1,"title":"Winter Kings","year":2009,"minutes":151,"rating":7.7,"genre":"thriller"},{"id":2,"title":"Red Harbor","year":2014,"minutes":93,"rating":7.4,"genre":"sci-fi"},{"id":3,"title":"Glass City","year":1996,"minutes":167,"rating":4.3,"genre":"sci-fi"},{"id":4,"title":"Quiet Storm","year":2009,"minutes":119,"rating":4.6,"genre":"thriller"},{"id":5,"title":"Paper Moon","year":2003,"minutes":165,"rating":8.4,"genre":"thriller"},{"id":6,"title":"Silver Fox","year":1996,"minutes":151,"rating":7.9,"genre":"drama"},{"id":7,"title":"Blue River","year":2012,"minutes":160,"rating":7.8,"genre":"comedy"},{"id":8,"title":"Night Train","year":2020,"minutes":120,"rating":4.3,"genre":"thriller"}]);
});

test("with \"comedy\", 1", () => {
  expect(bumpYear(MOVIES, "comedy", 1)).toEqual([{"id":1,"title":"Winter Kings","year":2009,"minutes":151,"rating":7.7,"genre":"thriller"},{"id":2,"title":"Red Harbor","year":2014,"minutes":93,"rating":7.4,"genre":"sci-fi"},{"id":3,"title":"Glass City","year":1996,"minutes":167,"rating":4.3,"genre":"sci-fi"},{"id":4,"title":"Quiet Storm","year":2009,"minutes":119,"rating":4.6,"genre":"thriller"},{"id":5,"title":"Paper Moon","year":2003,"minutes":165,"rating":8.4,"genre":"thriller"},{"id":6,"title":"Silver Fox","year":1986,"minutes":151,"rating":7.9,"genre":"drama"},{"id":7,"title":"Blue River","year":2013,"minutes":160,"rating":7.8,"genre":"comedy"},{"id":8,"title":"Night Train","year":2020,"minutes":120,"rating":4.3,"genre":"thriller"}]);
});
