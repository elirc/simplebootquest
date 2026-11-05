const CITIES = [
  {id: 1, name: "Quito", population: 1933, avgTemp: 27, continent: "Oceania"},
  {id: 2, name: "Austin", population: 7950, avgTemp: 22, continent: "Asia"},
  {id: 3, name: "Lisbon", population: 9481, avgTemp: 9, continent: "Americas"},
  {id: 4, name: "Turin", population: 5059, avgTemp: 17, continent: "Oceania"},
  {id: 5, name: "Oslo", population: 9586, avgTemp: 10, continent: "Oceania"},
  {id: 6, name: "Cairo", population: 4633, avgTemp: 15, continent: "Africa"},
  {id: 7, name: "Lima", population: 4179, avgTemp: 29, continent: "Americas"},
  {id: 8, name: "Seoul", population: 9426, avgTemp: 21, continent: "Asia"}
];

test("an empty list", () => {
  expect(countCitiesPerContinent([])).toEqual({});
});

test("all cities", () => {
  expect(countCitiesPerContinent(CITIES)).toEqual({"Oceania":3,"Asia":2,"Americas":2,"Africa":1});
});
