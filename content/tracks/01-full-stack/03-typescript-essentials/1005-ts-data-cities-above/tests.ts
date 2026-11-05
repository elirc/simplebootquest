const CITIES = [
  {id: 1, name: "Accra", population: 7664, avgTemp: 23, continent: "Americas"},
  {id: 2, name: "Hanoi", population: 5737, avgTemp: 24, continent: "Oceania"},
  {id: 3, name: "Lisbon", population: 1285, avgTemp: 26, continent: "Africa"},
  {id: 4, name: "Perth", population: 7529, avgTemp: 5, continent: "Europe"},
  {id: 5, name: "Lima", population: 2224, avgTemp: 25, continent: "Europe"},
  {id: 6, name: "Seoul", population: 5595, avgTemp: 9, continent: "Europe"},
  {id: 7, name: "Oslo", population: 9736, avgTemp: 24, continent: "Europe"},
  {id: 8, name: "Quito", population: 1438, avgTemp: 23, continent: "Africa"}
];

test("with 2224", () => {
  expect(citiesAbove(CITIES, 2224)).toEqual(["Accra","Hanoi","Perth","Seoul","Oslo"]);
});

test("with 5737", () => {
  expect(citiesAbove(CITIES, 5737)).toEqual(["Accra","Perth","Oslo"]);
});

test("with 999999", () => {
  expect(citiesAbove(CITIES, 999999)).toEqual([]);
});
