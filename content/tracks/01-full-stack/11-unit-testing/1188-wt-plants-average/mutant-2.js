// mutant: rounding: `Math.round` became `Math.floor`
const PLANTS = [
  {id: 1, name: "Ivy", waterEveryDays: 19, heightCm: 155, light: "bright", petSafe: false},
  {id: 2, name: "Monstera", waterEveryDays: 16, heightCm: 136, light: "medium", petSafe: false},
  {id: 3, name: "Snake Plant", waterEveryDays: 14, heightCm: 69, light: "medium", petSafe: false},
  {id: 4, name: "Mint", waterEveryDays: 17, heightCm: 13, light: "bright", petSafe: true},
  {id: 5, name: "Bonsai", waterEveryDays: 20, heightCm: 99, light: "medium", petSafe: true},
  {id: 6, name: "Basil", waterEveryDays: 8, heightCm: 34, light: "medium", petSafe: false},
  {id: 7, name: "Aloe", waterEveryDays: 11, heightCm: 108, light: "low", petSafe: false},
  {id: 8, name: "Lavender", waterEveryDays: 10, heightCm: 9, light: "bright", petSafe: false}
];

function averageWaterEveryDays(plants) {
  if (plants.length === 0) return null;
  const total = plants.reduce((sum, x) => sum + x.waterEveryDays, 0);
  return Math.floor((total / plants.length) * 10) / 10;
}
