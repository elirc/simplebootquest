const HOTELS = [
  {id: 1, name: "Sea Breeze", nightlyPrice: 103, stars: 2, city: "Toronto", breakfast: false},
  {id: 2, name: "Olive Court", nightlyPrice: 55, stars: 4, city: "Lisbon", breakfast: true},
  {id: 3, name: "Cityloft", nightlyPrice: 117, stars: 3, city: "Toronto", breakfast: true},
  {id: 4, name: "Maple House", nightlyPrice: 339, stars: 2, city: "Toronto", breakfast: true},
  {id: 5, name: "Northern Star", nightlyPrice: 339, stars: 5, city: "Lisbon", breakfast: false},
  {id: 6, name: "The Grand", nightlyPrice: 185, stars: 5, city: "Lisbon", breakfast: false},
  {id: 7, name: "Pine Lodge", nightlyPrice: 253, stars: 3, city: "Lisbon", breakfast: false},
  {id: 8, name: "Station Hotel", nightlyPrice: 239, stars: 3, city: "Lisbon", breakfast: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(HOTELS);
  topHotelsByStars(HOTELS, 1);
  expect(JSON.stringify(HOTELS)).toBe(before);
});

test("with 1", () => {
  expect(topHotelsByStars(HOTELS, 1)).toEqual(["Northern Star"]);
});

test("with 3", () => {
  expect(topHotelsByStars(HOTELS, 3)).toEqual(["Northern Star","The Grand","Olive Court"]);
});

test("with 0", () => {
  expect(topHotelsByStars(HOTELS, 0)).toEqual([]);
});
