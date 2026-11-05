// mutant: boundary: `<=` became `<`
const CITIES = [
  {id: 1, name: "Quito", population: 6407, avgTemp: 6, continent: "Americas"},
  {id: 2, name: "Seoul", population: 9394, avgTemp: 14, continent: "Africa"},
  {id: 3, name: "Austin", population: 8680, avgTemp: 4, continent: "Africa"},
  {id: 4, name: "Perth", population: 702, avgTemp: 3, continent: "Europe"},
  {id: 5, name: "Cairo", population: 5346, avgTemp: 23, continent: "Oceania"},
  {id: 6, name: "Oslo", population: 7384, avgTemp: 28, continent: "Europe"},
  {id: 7, name: "Lisbon", population: 6193, avgTemp: 18, continent: "Americas"},
  {id: 8, name: "Accra", population: 4039, avgTemp: 21, continent: "Africa"}
];

function citiesInRange(cities, low, high) {
  return cities.filter((x) => x.population >= low && x.population < high).map((x) => x.name);
}
