const CITIES = [
  {id: 1, name: "Lima", population: 6949, avgTemp: 9, continent: "Africa"},
  {id: 2, name: "Perth", population: 5386, avgTemp: 7, continent: "Africa"},
  {id: 3, name: "Lagos", population: 5388, avgTemp: 26, continent: "Europe"},
  {id: 4, name: "Seoul", population: 7986, avgTemp: 7, continent: "Oceania"},
  {id: 5, name: "Quito", population: 1905, avgTemp: 9, continent: "Asia"},
  {id: 6, name: "Accra", population: 6032, avgTemp: 14, continent: "Africa"},
  {id: 7, name: "Cairo", population: 9595, avgTemp: 4, continent: "Africa"},
  {id: 8, name: "Austin", population: 665, avgTemp: 21, continent: "Asia"}
];

test("an empty list", () => {
  expect(summariseCities([])).toEqual([]);
});

test("all cities", () => {
  expect(summariseCities(CITIES)).toEqual([{"id":1,"name":"Lima","avgTemp":9},{"id":2,"name":"Perth","avgTemp":7},{"id":3,"name":"Lagos","avgTemp":26},{"id":4,"name":"Seoul","avgTemp":7},{"id":5,"name":"Quito","avgTemp":9},{"id":6,"name":"Accra","avgTemp":14},{"id":7,"name":"Cairo","avgTemp":4},{"id":8,"name":"Austin","avgTemp":21}]);
});
