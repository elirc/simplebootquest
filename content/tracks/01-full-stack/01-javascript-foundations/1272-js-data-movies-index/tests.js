const MOVIES = [
  {id: 1, title: "Silver Fox", year: 1988, minutes: 121, rating: 8.5, genre: "drama"},
  {id: 2, title: "Glass City", year: 1994, minutes: 142, rating: 4, genre: "thriller"},
  {id: 3, title: "Cloud Atlas", year: 1995, minutes: 146, rating: 8.8, genre: "comedy"},
  {id: 4, title: "Iron Garden", year: 2006, minutes: 151, rating: 7.1, genre: "sci-fi"},
  {id: 5, title: "Night Train", year: 2013, minutes: 132, rating: 5.4, genre: "thriller"},
  {id: 6, title: "Last Light", year: 2012, minutes: 141, rating: 6.8, genre: "drama"},
  {id: 7, title: "Red Harbor", year: 2005, minutes: 116, rating: 4, genre: "sci-fi"},
  {id: 8, title: "Quiet Storm", year: 2007, minutes: 104, rating: 6.3, genre: "comedy"}
];

test("an empty list", () => {
  expect(moviesById([])).toEqual({});
});

test("all movies", () => {
  expect(moviesById(MOVIES)).toEqual({"1":"Silver Fox","2":"Glass City","3":"Cloud Atlas","4":"Iron Garden","5":"Night Train","6":"Last Light","7":"Red Harbor","8":"Quiet Storm"});
});
