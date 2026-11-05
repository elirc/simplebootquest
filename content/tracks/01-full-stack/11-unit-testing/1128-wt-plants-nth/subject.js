const PLANTS = [
  {id: 1, name: "Snake Plant", waterEveryDays: 12, heightCm: 8, light: "medium", petSafe: false},
  {id: 2, name: "Fern", waterEveryDays: 15, heightCm: 111, light: "medium", petSafe: true},
  {id: 3, name: "Bonsai", waterEveryDays: 2, heightCm: 22, light: "bright", petSafe: true},
  {id: 4, name: "Lavender", waterEveryDays: 12, heightCm: 119, light: "bright", petSafe: false},
  {id: 5, name: "Aloe", waterEveryDays: 17, heightCm: 61, light: "low", petSafe: false},
  {id: 6, name: "Mint", waterEveryDays: 16, heightCm: 155, light: "medium", petSafe: false},
  {id: 7, name: "Orchid", waterEveryDays: 18, heightCm: 77, light: "low", petSafe: true},
  {id: 8, name: "Monstera", waterEveryDays: 21, heightCm: 51, light: "low", petSafe: true}
];

function nthByHeightCm(plants, n) {
  const sorted = [...plants].sort((a, b) => b.heightCm - a.heightCm);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
