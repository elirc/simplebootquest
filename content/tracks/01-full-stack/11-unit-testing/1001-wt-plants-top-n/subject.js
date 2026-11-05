const PLANTS = [
  {id: 1, name: "Orchid", waterEveryDays: 19, heightCm: 55, light: "bright", petSafe: false},
  {id: 2, name: "Monstera", waterEveryDays: 12, heightCm: 83, light: "low", petSafe: false},
  {id: 3, name: "Cactus", waterEveryDays: 6, heightCm: 94, light: "bright", petSafe: true},
  {id: 4, name: "Ivy", waterEveryDays: 2, heightCm: 119, light: "low", petSafe: true},
  {id: 5, name: "Lavender", waterEveryDays: 12, heightCm: 104, light: "medium", petSafe: true},
  {id: 6, name: "Peace Lily", waterEveryDays: 20, heightCm: 27, light: "low", petSafe: true},
  {id: 7, name: "Fern", waterEveryDays: 9, heightCm: 67, light: "medium", petSafe: true},
  {id: 8, name: "Mint", waterEveryDays: 17, heightCm: 80, light: "medium", petSafe: true}
];

function topPlantsByWaterEveryDays(plants, n) {
  return [...plants].sort((a, b) => b.waterEveryDays - a.waterEveryDays).slice(0, n).map((x) => x.name);
}
