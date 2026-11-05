const CITIES = [
  {id: 1, name: "Quito", population: 9171, avgTemp: 7, continent: "Europe"},
  {id: 2, name: "Perth", population: 1226, avgTemp: 20, continent: "Africa"},
  {id: 3, name: "Seoul", population: 6231, avgTemp: 7, continent: "Europe"},
  {id: 4, name: "Oslo", population: 7957, avgTemp: 25, continent: "Oceania"},
  {id: 5, name: "Lagos", population: 3981, avgTemp: 24, continent: "Africa"},
  {id: 6, name: "Accra", population: 8308, avgTemp: 24, continent: "Oceania"},
  {id: 7, name: "Hanoi", population: 5574, avgTemp: 27, continent: "Americas"},
  {id: 8, name: "Cairo", population: 4655, avgTemp: 18, continent: "Asia"}
];

test("an empty list", () => {
  expect(summariseCities([])).toEqual([]);
});

test("all cities", () => {
  expect(summariseCities(CITIES)).toEqual([{"id":1,"name":"Quito","avgTemp":7},{"id":2,"name":"Perth","avgTemp":20},{"id":3,"name":"Seoul","avgTemp":7},{"id":4,"name":"Oslo","avgTemp":25},{"id":5,"name":"Lagos","avgTemp":24},{"id":6,"name":"Accra","avgTemp":24},{"id":7,"name":"Hanoi","avgTemp":27},{"id":8,"name":"Cairo","avgTemp":18}]);
});
