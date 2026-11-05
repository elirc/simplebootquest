const PLANTS = [
  {id: 1, name: "Monstera", waterEveryDays: 5, heightCm: 120, light: "low", petSafe: true},
  {id: 2, name: "Ivy", waterEveryDays: 14, heightCm: 8, light: "medium", petSafe: false},
  {id: 3, name: "Peace Lily", waterEveryDays: 3, heightCm: 64, light: "medium", petSafe: true},
  {id: 4, name: "Mint", waterEveryDays: 3, heightCm: 52, light: "bright", petSafe: true},
  {id: 5, name: "Cactus", waterEveryDays: 5, heightCm: 20, light: "low", petSafe: true},
  {id: 6, name: "Basil", waterEveryDays: 12, heightCm: 146, light: "medium", petSafe: false},
  {id: 7, name: "Orchid", waterEveryDays: 11, heightCm: 14, light: "medium", petSafe: true},
  {id: 8, name: "Aloe", waterEveryDays: 18, heightCm: 80, light: "low", petSafe: false}
];

function percentPetSafe(plants) {
  if (plants.length === 0) return 0;
  return Math.round((plants.filter((x) => x.petSafe).length / plants.length) * 100);
}
