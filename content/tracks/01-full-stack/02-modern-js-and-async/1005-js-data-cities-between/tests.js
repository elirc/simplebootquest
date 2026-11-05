const CITIES = [
  {id: 1, name: "Austin", population: 3649, avgTemp: 20, continent: "Europe"},
  {id: 2, name: "Oslo", population: 5412, avgTemp: 19, continent: "Oceania"},
  {id: 3, name: "Lisbon", population: 2153, avgTemp: 14, continent: "Africa"},
  {id: 4, name: "Lagos", population: 8902, avgTemp: 11, continent: "Americas"},
  {id: 5, name: "Hanoi", population: 3876, avgTemp: 26, continent: "Asia"},
  {id: 6, name: "Quito", population: 7485, avgTemp: 18, continent: "Africa"},
  {id: 7, name: "Seoul", population: 2173, avgTemp: 21, continent: "Asia"},
  {id: 8, name: "Cairo", population: 2555, avgTemp: 6, continent: "Americas"}
];

test("with 2555, 3876", () => {
  expect(citiesInRange(CITIES, 2555, 3876)).toEqual(["Austin","Hanoi","Cairo"]);
});

test("with 3876, 5412", () => {
  expect(citiesInRange(CITIES, 3876, 5412)).toEqual(["Oslo","Hanoi"]);
});

test("with 2555, 2555", () => {
  expect(citiesInRange(CITIES, 2555, 2555)).toEqual(["Cairo"]);
});
