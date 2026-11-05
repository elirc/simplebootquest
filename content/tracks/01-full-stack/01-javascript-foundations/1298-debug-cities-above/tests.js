const CITIES = [
  {id: 1, name: "Oslo", population: 3395, avgTemp: 5, continent: "Africa"},
  {id: 2, name: "Quito", population: 7662, avgTemp: 8, continent: "Oceania"},
  {id: 3, name: "Seoul", population: 5769, avgTemp: 26, continent: "Europe"},
  {id: 4, name: "Lisbon", population: 1055, avgTemp: 5, continent: "Europe"},
  {id: 5, name: "Lagos", population: 3002, avgTemp: 5, continent: "Oceania"},
  {id: 6, name: "Lima", population: 6064, avgTemp: 4, continent: "Europe"},
  {id: 7, name: "Accra", population: 1153, avgTemp: 6, continent: "Africa"},
  {id: 8, name: "Cairo", population: 8050, avgTemp: 19, continent: "Asia"}
];

test("with 3002", () => {
  expect(citiesAbove(CITIES, 3002)).toEqual(["Oslo","Quito","Seoul","Lima","Cairo"]);
});

test("with 5769", () => {
  expect(citiesAbove(CITIES, 5769)).toEqual(["Quito","Lima","Cairo"]);
});

test("with 999999", () => {
  expect(citiesAbove(CITIES, 999999)).toEqual([]);
});
