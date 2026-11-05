// mutant: search became case-sensitive
const PLANTS = [
  {id: 1, name: "Aloe", waterEveryDays: 14, heightCm: 117, light: "low", petSafe: true},
  {id: 2, name: "Monstera", waterEveryDays: 13, heightCm: 44, light: "medium", petSafe: true},
  {id: 3, name: "Mint", waterEveryDays: 20, heightCm: 117, light: "low", petSafe: true},
  {id: 4, name: "Ivy", waterEveryDays: 15, heightCm: 134, light: "medium", petSafe: false},
  {id: 5, name: "Peace Lily", waterEveryDays: 16, heightCm: 140, light: "low", petSafe: false},
  {id: 6, name: "Basil", waterEveryDays: 5, heightCm: 140, light: "medium", petSafe: false},
  {id: 7, name: "Snake Plant", waterEveryDays: 8, heightCm: 92, light: "low", petSafe: false},
  {id: 8, name: "Lavender", waterEveryDays: 12, heightCm: 74, light: "low", petSafe: false}
];

function searchPlants(plants, query) {
  const q = query.trim();
  return plants.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
