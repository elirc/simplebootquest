const PLANTS = [
  {id: 1, name: "Cactus", waterEveryDays: 12, heightCm: 95, light: "medium", petSafe: true},
  {id: 2, name: "Basil", waterEveryDays: 14, heightCm: 52, light: "low", petSafe: true},
  {id: 3, name: "Orchid", waterEveryDays: 12, heightCm: 67, light: "medium", petSafe: true},
  {id: 4, name: "Fern", waterEveryDays: 9, heightCm: 40, light: "bright", petSafe: false},
  {id: 5, name: "Snake Plant", waterEveryDays: 12, heightCm: 65, light: "bright", petSafe: true},
  {id: 6, name: "Mint", waterEveryDays: 6, heightCm: 87, light: "low", petSafe: false},
  {id: 7, name: "Aloe", waterEveryDays: 2, heightCm: 49, light: "medium", petSafe: true},
  {id: 8, name: "Monstera", waterEveryDays: 6, heightCm: 151, light: "low", petSafe: true}
];

test("an empty list", () => {
  expect(describePlants([])).toEqual([]);
});

test("all plants", () => {
  expect(describePlants(PLANTS)).toEqual(["Cactus (95)","Basil (52)","Orchid (67)","Fern (40)","Snake Plant (65)","Mint (87)","Aloe (49)","Monstera (151)"]);
});
