const CITIES = [
  {id: 1, name: "Lisbon", population: 7659, avgTemp: 14, continent: "Americas"},
  {id: 2, name: "Quito", population: 8638, avgTemp: 4, continent: "Africa"},
  {id: 3, name: "Oslo", population: 5164, avgTemp: 9, continent: "Africa"},
  {id: 4, name: "Cairo", population: 961, avgTemp: 14, continent: "Asia"},
  {id: 5, name: "Lagos", population: 8362, avgTemp: 3, continent: "Americas"},
  {id: 6, name: "Accra", population: 2248, avgTemp: 11, continent: "Europe"},
  {id: 7, name: "Perth", population: 9347, avgTemp: 10, continent: "Asia"},
  {id: 8, name: "Hanoi", population: 9108, avgTemp: 15, continent: "Americas"}
];

test("an empty list", () => {
  expect(totalAvgTemp([])).toEqual(0);
});

test("all cities", () => {
  expect(totalAvgTemp(CITIES)).toEqual(80);
});
