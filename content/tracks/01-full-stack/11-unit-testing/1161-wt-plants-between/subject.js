const PLANTS = [
  {id: 1, name: "Aloe", waterEveryDays: 16, heightCm: 50, light: "bright", petSafe: false},
  {id: 2, name: "Fern", waterEveryDays: 11, heightCm: 27, light: "bright", petSafe: true},
  {id: 3, name: "Orchid", waterEveryDays: 19, heightCm: 5, light: "bright", petSafe: false},
  {id: 4, name: "Snake Plant", waterEveryDays: 11, heightCm: 19, light: "bright", petSafe: true},
  {id: 5, name: "Bonsai", waterEveryDays: 8, heightCm: 88, light: "medium", petSafe: false},
  {id: 6, name: "Basil", waterEveryDays: 8, heightCm: 110, light: "bright", petSafe: false},
  {id: 7, name: "Mint", waterEveryDays: 11, heightCm: 47, light: "low", petSafe: true},
  {id: 8, name: "Peace Lily", waterEveryDays: 14, heightCm: 118, light: "medium", petSafe: false}
];

function plantsInRange(plants, low, high) {
  return plants.filter((x) => x.heightCm >= low && x.heightCm <= high).map((x) => x.name);
}
