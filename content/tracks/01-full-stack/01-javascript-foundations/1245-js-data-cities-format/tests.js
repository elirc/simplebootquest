const CITIES = [
  {id: 1, name: "Seoul", population: 790, avgTemp: 15, continent: "Europe"},
  {id: 2, name: "Turin", population: 7747, avgTemp: 11, continent: "Europe"},
  {id: 3, name: "Lisbon", population: 929, avgTemp: 15, continent: "Americas"},
  {id: 4, name: "Lagos", population: 9638, avgTemp: 7, continent: "Americas"},
  {id: 5, name: "Accra", population: 4822, avgTemp: 17, continent: "Europe"},
  {id: 6, name: "Hanoi", population: 3451, avgTemp: 24, continent: "Europe"},
  {id: 7, name: "Austin", population: 5711, avgTemp: 26, continent: "Americas"},
  {id: 8, name: "Quito", population: 1429, avgTemp: 24, continent: "Oceania"}
];

test("an empty list", () => {
  expect(describeCities([])).toEqual([]);
});

test("all cities", () => {
  expect(describeCities(CITIES)).toEqual(["Seoul (15)","Turin (11)","Lisbon (15)","Lagos (7)","Accra (17)","Hanoi (24)","Austin (26)","Quito (24)"]);
});
