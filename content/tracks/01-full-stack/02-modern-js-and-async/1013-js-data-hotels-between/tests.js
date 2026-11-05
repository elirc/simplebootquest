const HOTELS = [
  {id: 1, name: "Station Hotel", nightlyPrice: 207, stars: 1, city: "Kyoto", breakfast: false},
  {id: 2, name: "Cityloft", nightlyPrice: 213, stars: 2, city: "Toronto", breakfast: true},
  {id: 3, name: "Harbour View", nightlyPrice: 135, stars: 5, city: "Lisbon", breakfast: true},
  {id: 4, name: "Sky Garden", nightlyPrice: 186, stars: 4, city: "Toronto", breakfast: true},
  {id: 5, name: "The Grand", nightlyPrice: 54, stars: 2, city: "Toronto", breakfast: true},
  {id: 6, name: "Maple House", nightlyPrice: 96, stars: 5, city: "Lisbon", breakfast: true},
  {id: 7, name: "Sea Breeze", nightlyPrice: 71, stars: 1, city: "Toronto", breakfast: false},
  {id: 8, name: "Old Mill", nightlyPrice: 355, stars: 1, city: "Kyoto", breakfast: false}
];

test("with 96, 186", () => {
  expect(hotelsInRange(HOTELS, 96, 186)).toEqual(["Harbour View","Sky Garden","Maple House"]);
});

test("with 186, 207", () => {
  expect(hotelsInRange(HOTELS, 186, 207)).toEqual(["Station Hotel","Sky Garden"]);
});

test("with 96, 96", () => {
  expect(hotelsInRange(HOTELS, 96, 96)).toEqual(["Maple House"]);
});
