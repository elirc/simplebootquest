const CITIES = [
  {id: 1, name: "Lima", population: 5234, avgTemp: 24, continent: "Africa"},
  {id: 2, name: "Accra", population: 1721, avgTemp: 18, continent: "Europe"},
  {id: 3, name: "Hanoi", population: 6306, avgTemp: 10, continent: "Africa"},
  {id: 4, name: "Turin", population: 5858, avgTemp: 26, continent: "Oceania"},
  {id: 5, name: "Austin", population: 3857, avgTemp: 25, continent: "Asia"},
  {id: 6, name: "Seoul", population: 4227, avgTemp: 21, continent: "Europe"},
  {id: 7, name: "Lisbon", population: 5246, avgTemp: 3, continent: "Europe"},
  {id: 8, name: "Cairo", population: 8496, avgTemp: 23, continent: "Asia"}
];

test("with \"Europe\"", () => {
  expect(citiesInContinentRanked(CITIES, "Europe")).toEqual(["Lisbon","Seoul","Accra"]);
});

test("with \"Africa\"", () => {
  expect(citiesInContinentRanked(CITIES, "Africa")).toEqual(["Hanoi","Lima"]);
});

test("with \"Americas\"", () => {
  expect(citiesInContinentRanked(CITIES, "Americas")).toEqual([]);
});
