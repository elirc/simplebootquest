const HOTELS = [
  {id: 1, name: "Old Mill", nightlyPrice: 223, stars: 4, city: "Lisbon", breakfast: true},
  {id: 2, name: "Sky Garden", nightlyPrice: 317, stars: 1, city: "Toronto", breakfast: true},
  {id: 3, name: "Maple House", nightlyPrice: 150, stars: 2, city: "Kyoto", breakfast: true},
  {id: 4, name: "Olive Court", nightlyPrice: 72, stars: 4, city: "Kyoto", breakfast: true},
  {id: 5, name: "Riverside Inn", nightlyPrice: 197, stars: 2, city: "Toronto", breakfast: false},
  {id: 6, name: "Sea Breeze", nightlyPrice: 207, stars: 2, city: "Kyoto", breakfast: false},
  {id: 7, name: "Harbour View", nightlyPrice: 228, stars: 4, city: "Lisbon", breakfast: false},
  {id: 8, name: "Pine Lodge", nightlyPrice: 163, stars: 4, city: "Lisbon", breakfast: true}
];

test("an empty list", () => {
  expect(percentBreakfast([])).toEqual(0);
});

test("all hotels", () => {
  expect(percentBreakfast(HOTELS)).toEqual(63);
});
