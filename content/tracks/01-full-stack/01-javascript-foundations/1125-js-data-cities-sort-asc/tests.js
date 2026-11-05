const CITIES = [
  {id: 1, name: "Hanoi", population: 9245, avgTemp: 19, continent: "Oceania"},
  {id: 2, name: "Lisbon", population: 1682, avgTemp: 6, continent: "Oceania"},
  {id: 3, name: "Turin", population: 1019, avgTemp: 20, continent: "Europe"},
  {id: 4, name: "Quito", population: 9423, avgTemp: 22, continent: "Europe"},
  {id: 5, name: "Cairo", population: 6957, avgTemp: 7, continent: "Africa"},
  {id: 6, name: "Lima", population: 6198, avgTemp: 4, continent: "Oceania"},
  {id: 7, name: "Oslo", population: 9098, avgTemp: 29, continent: "Oceania"},
  {id: 8, name: "Austin", population: 2407, avgTemp: 13, continent: "Europe"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(CITIES);
  citiesByAvgTemp(CITIES);
  expect(JSON.stringify(CITIES)).toBe(before);
});

test("all cities", () => {
  expect(citiesByAvgTemp(CITIES)).toEqual(["Lima","Lisbon","Cairo","Austin","Hanoi","Turin","Quito","Oslo"]);
});
