const CITIES = [
  {id: 1, name: "Seoul", population: 931, avgTemp: 20, continent: "Europe"},
  {id: 2, name: "Turin", population: 1049, avgTemp: 10, continent: "Europe"},
  {id: 3, name: "Quito", population: 7711, avgTemp: 18, continent: "Africa"},
  {id: 4, name: "Hanoi", population: 5198, avgTemp: 26, continent: "Europe"},
  {id: 5, name: "Perth", population: 7645, avgTemp: 8, continent: "Oceania"},
  {id: 6, name: "Lisbon", population: 6674, avgTemp: 14, continent: "Americas"},
  {id: 7, name: "Cairo", population: 3927, avgTemp: 7, continent: "Asia"},
  {id: 8, name: "Oslo", population: 3547, avgTemp: 9, continent: "Europe"}
];

test("an empty list", () => {
  expect(averagePopulationPerContinent([])).toEqual({});
});

test("all cities", () => {
  expect(averagePopulationPerContinent(CITIES)).toEqual({"Europe":2681,"Africa":7711,"Oceania":7645,"Americas":6674,"Asia":3927});
});
