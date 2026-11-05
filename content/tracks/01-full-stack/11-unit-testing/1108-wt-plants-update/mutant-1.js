// mutant: condition negated: `===` became `!==`
const PLANTS = [
  {id: 1, name: "Peace Lily", waterEveryDays: 17, heightCm: 155, light: "medium", petSafe: false},
  {id: 2, name: "Snake Plant", waterEveryDays: 11, heightCm: 51, light: "low", petSafe: true},
  {id: 3, name: "Monstera", waterEveryDays: 6, heightCm: 110, light: "bright", petSafe: true},
  {id: 4, name: "Aloe", waterEveryDays: 12, heightCm: 26, light: "bright", petSafe: false},
  {id: 5, name: "Fern", waterEveryDays: 16, heightCm: 127, light: "medium", petSafe: false},
  {id: 6, name: "Lavender", waterEveryDays: 17, heightCm: 73, light: "bright", petSafe: true},
  {id: 7, name: "Basil", waterEveryDays: 8, heightCm: 151, light: "low", petSafe: true},
  {id: 8, name: "Bonsai", waterEveryDays: 18, heightCm: 115, light: "medium", petSafe: true}
];

function bumpWaterEveryDays(plants, value, amount) {
  return plants.map((x) => (x.light !== value ? { ...x, waterEveryDays: x.waterEveryDays + amount } : x));
}
