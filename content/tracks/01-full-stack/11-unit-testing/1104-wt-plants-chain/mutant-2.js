// mutant: sort direction reversed
const PLANTS = [
  {id: 1, name: "Peace Lily", waterEveryDays: 20, heightCm: 14, light: "bright", petSafe: false},
  {id: 2, name: "Snake Plant", waterEveryDays: 19, heightCm: 53, light: "bright", petSafe: true},
  {id: 3, name: "Monstera", waterEveryDays: 16, heightCm: 136, light: "medium", petSafe: true},
  {id: 4, name: "Basil", waterEveryDays: 11, heightCm: 6, light: "low", petSafe: true},
  {id: 5, name: "Orchid", waterEveryDays: 20, heightCm: 138, light: "medium", petSafe: true},
  {id: 6, name: "Lavender", waterEveryDays: 15, heightCm: 125, light: "low", petSafe: false},
  {id: 7, name: "Ivy", waterEveryDays: 6, heightCm: 53, light: "low", petSafe: true},
  {id: 8, name: "Aloe", waterEveryDays: 9, heightCm: 154, light: "low", petSafe: true}
];

function plantsInLightRanked(plants, value) {
  return plants
    .filter((x) => x.light === value)
    .sort((a, b) => a.heightCm - b.heightCm)
    .map((x) => x.name);
}
