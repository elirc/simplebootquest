const HOTELS = [
  {id: 1, name: "Maple House", nightlyPrice: 306, stars: 3, city: "Lisbon", breakfast: true},
  {id: 2, name: "Sky Garden", nightlyPrice: 157, stars: 3, city: "Toronto", breakfast: true},
  {id: 3, name: "Riverside Inn", nightlyPrice: 169, stars: 4, city: "Kyoto", breakfast: false},
  {id: 4, name: "Sea Breeze", nightlyPrice: 384, stars: 2, city: "Kyoto", breakfast: false},
  {id: 5, name: "Cityloft", nightlyPrice: 272, stars: 2, city: "Toronto", breakfast: false},
  {id: 6, name: "The Grand", nightlyPrice: 387, stars: 3, city: "Lisbon", breakfast: true},
  {id: 7, name: "Olive Court", nightlyPrice: 166, stars: 5, city: "Toronto", breakfast: true},
  {id: 8, name: "Station Hotel", nightlyPrice: 328, stars: 5, city: "Toronto", breakfast: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(HOTELS);
  hotelsByStars(HOTELS);
  expect(JSON.stringify(HOTELS)).toBe(before);
});

test("all hotels", () => {
  expect(hotelsByStars(HOTELS)).toEqual(["Sea Breeze","Cityloft","Maple House","Sky Garden","The Grand","Riverside Inn","Olive Court","Station Hotel"]);
});
