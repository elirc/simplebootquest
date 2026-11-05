const CITIES = [
  {id: 1, name: "Perth", population: 7590, avgTemp: 4, continent: "Asia"},
  {id: 2, name: "Seoul", population: 8336, avgTemp: 7, continent: "Africa"},
  {id: 3, name: "Lisbon", population: 8751, avgTemp: 2, continent: "Oceania"},
  {id: 4, name: "Quito", population: 2583, avgTemp: 14, continent: "Asia"},
  {id: 5, name: "Oslo", population: 8323, avgTemp: 15, continent: "Europe"},
  {id: 6, name: "Lagos", population: 9561, avgTemp: 12, continent: "Americas"},
  {id: 7, name: "Cairo", population: 9189, avgTemp: 5, continent: "Europe"},
  {id: 8, name: "Austin", population: 3698, avgTemp: 3, continent: "Europe"}
];

test("an empty list", () => {
  expect(averagePopulation([])).toEqual(null);
});

test("all cities", () => {
  expect(averagePopulation(CITIES)).toEqual(7253.9);
});
