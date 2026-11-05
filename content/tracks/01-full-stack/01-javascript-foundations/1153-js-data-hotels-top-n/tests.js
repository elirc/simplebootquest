const HOTELS = [
  {id: 1, name: "Riverside Inn", nightlyPrice: 287, stars: 4, city: "Toronto", breakfast: false},
  {id: 2, name: "Olive Court", nightlyPrice: 289, stars: 1, city: "Toronto", breakfast: true},
  {id: 3, name: "Pine Lodge", nightlyPrice: 133, stars: 2, city: "Toronto", breakfast: false},
  {id: 4, name: "Sea Breeze", nightlyPrice: 297, stars: 3, city: "Kyoto", breakfast: true},
  {id: 5, name: "The Grand", nightlyPrice: 164, stars: 5, city: "Lisbon", breakfast: false},
  {id: 6, name: "Sky Garden", nightlyPrice: 284, stars: 2, city: "Lisbon", breakfast: true},
  {id: 7, name: "Cityloft", nightlyPrice: 78, stars: 2, city: "Toronto", breakfast: true},
  {id: 8, name: "Northern Star", nightlyPrice: 247, stars: 4, city: "Toronto", breakfast: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(HOTELS);
  topHotelsByStars(HOTELS, 1);
  expect(JSON.stringify(HOTELS)).toBe(before);
});

test("with 1", () => {
  expect(topHotelsByStars(HOTELS, 1)).toEqual(["The Grand"]);
});

test("with 3", () => {
  expect(topHotelsByStars(HOTELS, 3)).toEqual(["The Grand","Riverside Inn","Northern Star"]);
});

test("with 0", () => {
  expect(topHotelsByStars(HOTELS, 0)).toEqual([]);
});
