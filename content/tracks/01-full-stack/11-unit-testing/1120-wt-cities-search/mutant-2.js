// mutant: input is no longer trimmed
const CITIES = [
  {id: 1, name: "Lisbon", population: 5253, avgTemp: 13, continent: "Africa"},
  {id: 2, name: "Turin", population: 5304, avgTemp: 20, continent: "Africa"},
  {id: 3, name: "Lima", population: 9004, avgTemp: 2, continent: "Asia"},
  {id: 4, name: "Seoul", population: 5882, avgTemp: 4, continent: "Asia"},
  {id: 5, name: "Perth", population: 8676, avgTemp: 17, continent: "Europe"},
  {id: 6, name: "Oslo", population: 492, avgTemp: 6, continent: "Oceania"},
  {id: 7, name: "Accra", population: 830, avgTemp: 12, continent: "Oceania"},
  {id: 8, name: "Hanoi", population: 7910, avgTemp: 3, continent: "Asia"}
];

function searchCities(cities, query) {
  const q = query.toLowerCase();
  return cities.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
