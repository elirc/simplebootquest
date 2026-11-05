const CITIES = [
  {id: 1, name: "Oslo", population: 5093, avgTemp: 23, continent: "Africa"},
  {id: 2, name: "Accra", population: 2487, avgTemp: 28, continent: "Americas"},
  {id: 3, name: "Lagos", population: 3899, avgTemp: 9, continent: "Africa"},
  {id: 4, name: "Seoul", population: 454, avgTemp: 22, continent: "Oceania"},
  {id: 5, name: "Hanoi", population: 9017, avgTemp: 18, continent: "Africa"},
  {id: 6, name: "Turin", population: 8666, avgTemp: 28, continent: "Africa"},
  {id: 7, name: "Quito", population: 6886, avgTemp: 23, continent: "Americas"},
  {id: 8, name: "Lisbon", population: 1939, avgTemp: 21, continent: "Asia"}
];

test("with 1, 3", () => {
  expect(pageOfCities(CITIES, 1, 3)).toEqual({"items":["Oslo","Accra","Lagos"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfCities(CITIES, 2, 3)).toEqual({"items":["Seoul","Hanoi","Turin"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfCities(CITIES, 3, 3)).toEqual({"items":["Quito","Lisbon"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfCities(CITIES, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
