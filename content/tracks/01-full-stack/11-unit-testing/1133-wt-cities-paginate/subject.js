const CITIES = [
  {id: 1, name: "Lisbon", population: 8360, avgTemp: 21, continent: "Europe"},
  {id: 2, name: "Lima", population: 2946, avgTemp: 5, continent: "Europe"},
  {id: 3, name: "Turin", population: 4730, avgTemp: 17, continent: "Europe"},
  {id: 4, name: "Seoul", population: 2958, avgTemp: 27, continent: "Oceania"},
  {id: 5, name: "Lagos", population: 4899, avgTemp: 14, continent: "Asia"},
  {id: 6, name: "Hanoi", population: 2245, avgTemp: 17, continent: "Asia"},
  {id: 7, name: "Oslo", population: 4438, avgTemp: 8, continent: "Americas"},
  {id: 8, name: "Cairo", population: 8945, avgTemp: 27, continent: "Asia"}
];

function pageOfCities(cities, page, size) {
  const totalPages = Math.ceil(cities.length / size);
  const items = cities.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
