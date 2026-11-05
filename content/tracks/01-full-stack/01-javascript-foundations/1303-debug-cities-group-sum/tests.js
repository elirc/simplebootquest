const CITIES = [
  {id: 1, name: "Accra", population: 557, avgTemp: 5, continent: "Oceania"},
  {id: 2, name: "Oslo", population: 6316, avgTemp: 16, continent: "Oceania"},
  {id: 3, name: "Cairo", population: 8549, avgTemp: 18, continent: "Americas"},
  {id: 4, name: "Turin", population: 8603, avgTemp: 27, continent: "Europe"},
  {id: 5, name: "Hanoi", population: 4731, avgTemp: 28, continent: "Africa"},
  {id: 6, name: "Perth", population: 1812, avgTemp: 15, continent: "Americas"},
  {id: 7, name: "Seoul", population: 8590, avgTemp: 12, continent: "Oceania"},
  {id: 8, name: "Lagos", population: 2288, avgTemp: 15, continent: "Oceania"}
];

test("an empty list", () => {
  expect(populationPerContinent([])).toEqual({});
});

test("all cities", () => {
  expect(populationPerContinent(CITIES)).toEqual({"Oceania":17751,"Americas":10361,"Europe":8603,"Africa":4731});
});
