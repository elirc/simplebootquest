const CITIES = [
  {id: 1, name: "Seoul", population: 8971, avgTemp: 16, continent: "Oceania"},
  {id: 2, name: "Accra", population: 4901, avgTemp: 9, continent: "Europe"},
  {id: 3, name: "Quito", population: 5956, avgTemp: 3, continent: "Asia"},
  {id: 4, name: "Austin", population: 6761, avgTemp: 11, continent: "Oceania"},
  {id: 5, name: "Oslo", population: 996, avgTemp: 28, continent: "Americas"},
  {id: 6, name: "Lima", population: 6038, avgTemp: 27, continent: "Oceania"},
  {id: 7, name: "Turin", population: 4471, avgTemp: 25, continent: "Africa"},
  {id: 8, name: "Cairo", population: 1524, avgTemp: 13, continent: "Oceania"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(CITIES);
  topCitiesByPopulation(CITIES, 1);
  expect(JSON.stringify(CITIES)).toBe(before);
});

test("with 1", () => {
  expect(topCitiesByPopulation(CITIES, 1)).toEqual(["Seoul"]);
});

test("with 3", () => {
  expect(topCitiesByPopulation(CITIES, 3)).toEqual(["Seoul","Austin","Lima"]);
});

test("with 0", () => {
  expect(topCitiesByPopulation(CITIES, 0)).toEqual([]);
});
