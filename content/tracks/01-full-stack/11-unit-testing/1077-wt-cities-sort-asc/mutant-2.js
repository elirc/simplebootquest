// mutant: sorts (mutates) the input array in place
const CITIES = [
  {id: 1, name: "Lagos", population: 2637, avgTemp: 24, continent: "Europe"},
  {id: 2, name: "Lisbon", population: 6853, avgTemp: 13, continent: "Europe"},
  {id: 3, name: "Turin", population: 3455, avgTemp: 27, continent: "Asia"},
  {id: 4, name: "Lima", population: 8459, avgTemp: 28, continent: "Africa"},
  {id: 5, name: "Austin", population: 4228, avgTemp: 27, continent: "Oceania"},
  {id: 6, name: "Perth", population: 9464, avgTemp: 20, continent: "Oceania"},
  {id: 7, name: "Oslo", population: 2781, avgTemp: 27, continent: "Asia"},
  {id: 8, name: "Seoul", population: 9845, avgTemp: 26, continent: "Americas"}
];

function citiesByPopulation(cities) {
  return cities.sort((a, b) => a.population - b.population).map((x) => x.name);
}
