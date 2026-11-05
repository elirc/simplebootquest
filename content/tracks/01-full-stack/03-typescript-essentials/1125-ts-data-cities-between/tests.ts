const CITIES = [
  {id: 1, name: "Oslo", population: 468, avgTemp: 29, continent: "Europe"},
  {id: 2, name: "Quito", population: 5351, avgTemp: 5, continent: "Africa"},
  {id: 3, name: "Turin", population: 3225, avgTemp: 20, continent: "Europe"},
  {id: 4, name: "Accra", population: 2431, avgTemp: 16, continent: "Africa"},
  {id: 5, name: "Hanoi", population: 659, avgTemp: 4, continent: "Americas"},
  {id: 6, name: "Austin", population: 1846, avgTemp: 15, continent: "Oceania"},
  {id: 7, name: "Perth", population: 2352, avgTemp: 3, continent: "Europe"},
  {id: 8, name: "Seoul", population: 4126, avgTemp: 8, continent: "Africa"}
];

test("with 1846, 2431", () => {
  expect(citiesInRange(CITIES, 1846, 2431)).toEqual(["Accra","Austin","Perth"]);
});

test("with 2431, 3225", () => {
  expect(citiesInRange(CITIES, 2431, 3225)).toEqual(["Turin","Accra"]);
});

test("with 1846, 1846", () => {
  expect(citiesInRange(CITIES, 1846, 1846)).toEqual(["Austin"]);
});
