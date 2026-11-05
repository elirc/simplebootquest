const CITIES = [
  {id: 1, name: "Cairo", population: 7739, avgTemp: 7, continent: "Africa"},
  {id: 2, name: "Turin", population: 970, avgTemp: 14, continent: "Oceania"},
  {id: 3, name: "Hanoi", population: 7434, avgTemp: 26, continent: "Americas"},
  {id: 4, name: "Lagos", population: 6161, avgTemp: 22, continent: "Europe"},
  {id: 5, name: "Perth", population: 4705, avgTemp: 10, continent: "Americas"},
  {id: 6, name: "Accra", population: 7145, avgTemp: 27, continent: "Americas"},
  {id: 7, name: "Lisbon", population: 2311, avgTemp: 26, continent: "Asia"},
  {id: 8, name: "Seoul", population: 8343, avgTemp: 24, continent: "Asia"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(CITIES);
  bumpPopulation(CITIES, "Europe", 10);
  expect(JSON.stringify(CITIES)).toBe(before);
});

test("with \"Europe\", 10", () => {
  expect(bumpPopulation(CITIES, "Europe", 10)).toEqual([{"id":1,"name":"Cairo","population":7739,"avgTemp":7,"continent":"Africa"},{"id":2,"name":"Turin","population":970,"avgTemp":14,"continent":"Oceania"},{"id":3,"name":"Hanoi","population":7434,"avgTemp":26,"continent":"Americas"},{"id":4,"name":"Lagos","population":6171,"avgTemp":22,"continent":"Europe"},{"id":5,"name":"Perth","population":4705,"avgTemp":10,"continent":"Americas"},{"id":6,"name":"Accra","population":7145,"avgTemp":27,"continent":"Americas"},{"id":7,"name":"Lisbon","population":2311,"avgTemp":26,"continent":"Asia"},{"id":8,"name":"Seoul","population":8343,"avgTemp":24,"continent":"Asia"}]);
});

test("with \"Africa\", 1", () => {
  expect(bumpPopulation(CITIES, "Africa", 1)).toEqual([{"id":1,"name":"Cairo","population":7740,"avgTemp":7,"continent":"Africa"},{"id":2,"name":"Turin","population":970,"avgTemp":14,"continent":"Oceania"},{"id":3,"name":"Hanoi","population":7434,"avgTemp":26,"continent":"Americas"},{"id":4,"name":"Lagos","population":6161,"avgTemp":22,"continent":"Europe"},{"id":5,"name":"Perth","population":4705,"avgTemp":10,"continent":"Americas"},{"id":6,"name":"Accra","population":7145,"avgTemp":27,"continent":"Americas"},{"id":7,"name":"Lisbon","population":2311,"avgTemp":26,"continent":"Asia"},{"id":8,"name":"Seoul","population":8343,"avgTemp":24,"continent":"Asia"}]);
});
