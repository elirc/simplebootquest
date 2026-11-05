const CITIES = [
  {id: 1, name: "Accra", population: 7109, avgTemp: 23, continent: "Asia"},
  {id: 2, name: "Austin", population: 4889, avgTemp: 13, continent: "Americas"},
  {id: 3, name: "Lisbon", population: 348, avgTemp: 17, continent: "Asia"},
  {id: 4, name: "Cairo", population: 2034, avgTemp: 17, continent: "Europe"},
  {id: 5, name: "Seoul", population: 5122, avgTemp: 19, continent: "Oceania"},
  {id: 6, name: "Perth", population: 1673, avgTemp: 23, continent: "Africa"},
  {id: 7, name: "Turin", population: 9299, avgTemp: 24, continent: "Europe"},
  {id: 8, name: "Hanoi", population: 2357, avgTemp: 11, continent: "Africa"}
];

test("with 2034", () => {
  expect(citiesAbove(CITIES, 2034)).toEqual(["Accra","Austin","Seoul","Turin","Hanoi"]);
});

test("with 4889", () => {
  expect(citiesAbove(CITIES, 4889)).toEqual(["Accra","Seoul","Turin"]);
});

test("with 999999", () => {
  expect(citiesAbove(CITIES, 999999)).toEqual([]);
});
