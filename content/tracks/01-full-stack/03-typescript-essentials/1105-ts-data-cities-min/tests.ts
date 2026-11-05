const CITIES = [
  {id: 1, name: "Cairo", population: 8800, avgTemp: 11, continent: "Oceania"},
  {id: 2, name: "Perth", population: 7963, avgTemp: 17, continent: "Oceania"},
  {id: 3, name: "Hanoi", population: 3586, avgTemp: 26, continent: "Europe"},
  {id: 4, name: "Seoul", population: 9248, avgTemp: 14, continent: "Oceania"},
  {id: 5, name: "Accra", population: 5777, avgTemp: 15, continent: "Africa"},
  {id: 6, name: "Oslo", population: 5514, avgTemp: 20, continent: "Oceania"},
  {id: 7, name: "Turin", population: 3215, avgTemp: 14, continent: "Oceania"},
  {id: 8, name: "Lisbon", population: 8952, avgTemp: 3, continent: "Asia"}
];

test("an empty list", () => {
  expect(lowestPopulation([])).toEqual(null);
});

test("all cities", () => {
  expect(lowestPopulation(CITIES)).toEqual("Turin");
});
