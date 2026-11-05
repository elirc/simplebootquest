const CITIES = [
  {id: 1, name: "Cairo", population: 5690, avgTemp: 19, continent: "Oceania"},
  {id: 2, name: "Lisbon", population: 3927, avgTemp: 16, continent: "Europe"},
  {id: 3, name: "Quito", population: 3676, avgTemp: 20, continent: "Asia"},
  {id: 4, name: "Accra", population: 7087, avgTemp: 11, continent: "Oceania"},
  {id: 5, name: "Lima", population: 4296, avgTemp: 13, continent: "Asia"},
  {id: 6, name: "Perth", population: 3953, avgTemp: 21, continent: "Asia"},
  {id: 7, name: "Lagos", population: 6694, avgTemp: 27, continent: "Africa"},
  {id: 8, name: "Hanoi", population: 6866, avgTemp: 17, continent: "Oceania"}
];

test("an empty list", () => {
  expect(populationPerContinent([])).toEqual({});
});

test("all cities", () => {
  expect(populationPerContinent(CITIES)).toEqual({"Oceania":19643,"Europe":3927,"Asia":11925,"Africa":6694});
});
