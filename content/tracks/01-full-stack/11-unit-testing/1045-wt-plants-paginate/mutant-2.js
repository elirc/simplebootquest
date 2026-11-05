// mutant: `Math.ceil` became `Math.floor`
const PLANTS = [
  {id: 1, name: "Peace Lily", waterEveryDays: 19, heightCm: 94, light: "low", petSafe: false},
  {id: 2, name: "Ivy", waterEveryDays: 13, heightCm: 130, light: "medium", petSafe: true},
  {id: 3, name: "Cactus", waterEveryDays: 8, heightCm: 123, light: "low", petSafe: false},
  {id: 4, name: "Aloe", waterEveryDays: 7, heightCm: 36, light: "bright", petSafe: true},
  {id: 5, name: "Lavender", waterEveryDays: 17, heightCm: 133, light: "medium", petSafe: false},
  {id: 6, name: "Snake Plant", waterEveryDays: 12, heightCm: 130, light: "low", petSafe: true},
  {id: 7, name: "Fern", waterEveryDays: 16, heightCm: 55, light: "low", petSafe: false},
  {id: 8, name: "Bonsai", waterEveryDays: 17, heightCm: 95, light: "bright", petSafe: true}
];

function pageOfPlants(plants, page, size) {
  const totalPages = Math.floor(plants.length / size);
  const items = plants.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
