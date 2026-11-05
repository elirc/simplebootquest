// mutant: sort direction reversed
const PLANTS = [
  {id: 1, name: "Basil", waterEveryDays: 10, heightCm: 11, light: "bright", petSafe: true},
  {id: 2, name: "Orchid", waterEveryDays: 17, heightCm: 110, light: "bright", petSafe: false},
  {id: 3, name: "Snake Plant", waterEveryDays: 16, heightCm: 39, light: "low", petSafe: false},
  {id: 4, name: "Bonsai", waterEveryDays: 12, heightCm: 124, light: "bright", petSafe: false},
  {id: 5, name: "Aloe", waterEveryDays: 12, heightCm: 65, light: "low", petSafe: true},
  {id: 6, name: "Mint", waterEveryDays: 5, heightCm: 16, light: "medium", petSafe: true},
  {id: 7, name: "Peace Lily", waterEveryDays: 2, heightCm: 33, light: "bright", petSafe: true},
  {id: 8, name: "Ivy", waterEveryDays: 1, heightCm: 127, light: "medium", petSafe: true}
];

function plantsByWaterEveryDays(plants) {
  return [...plants].sort((a, b) => b.waterEveryDays - a.waterEveryDays).map((x) => x.name);
}
