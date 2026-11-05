const CITIES = [
  {id: 1, name: "Perth", population: 300, avgTemp: 24, continent: "Americas"},
  {id: 2, name: "Quito", population: 7692, avgTemp: 13, continent: "Europe"},
  {id: 3, name: "Lima", population: 1183, avgTemp: 17, continent: "Asia"},
  {id: 4, name: "Oslo", population: 5964, avgTemp: 17, continent: "Americas"},
  {id: 5, name: "Accra", population: 3141, avgTemp: 12, continent: "Americas"},
  {id: 6, name: "Cairo", population: 9634, avgTemp: 18, continent: "Asia"},
  {id: 7, name: "Lagos", population: 8046, avgTemp: 23, continent: "Europe"},
  {id: 8, name: "Lisbon", population: 8506, avgTemp: 28, continent: "Asia"}
];

test("an empty list", () => {
  expect(citiesById([])).toEqual({});
});

test("all cities", () => {
  expect(citiesById(CITIES)).toEqual({"1":"Perth","2":"Quito","3":"Lima","4":"Oslo","5":"Accra","6":"Cairo","7":"Lagos","8":"Lisbon"});
});
