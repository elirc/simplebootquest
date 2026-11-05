const HOTELS = [
  {id: 1, name: "Sea Breeze", nightlyPrice: 308, stars: 5, city: "Lisbon", breakfast: false},
  {id: 2, name: "Olive Court", nightlyPrice: 405, stars: 1, city: "Kyoto", breakfast: false},
  {id: 3, name: "Northern Star", nightlyPrice: 107, stars: 5, city: "Kyoto", breakfast: false},
  {id: 4, name: "Cityloft", nightlyPrice: 250, stars: 5, city: "Lisbon", breakfast: false},
  {id: 5, name: "Station Hotel", nightlyPrice: 258, stars: 3, city: "Lisbon", breakfast: true},
  {id: 6, name: "Old Mill", nightlyPrice: 383, stars: 1, city: "Toronto", breakfast: true},
  {id: 7, name: "Sky Garden", nightlyPrice: 368, stars: 5, city: "Lisbon", breakfast: true},
  {id: 8, name: "Maple House", nightlyPrice: 129, stars: 2, city: "Lisbon", breakfast: false}
];

test("an empty list", () => {
  expect(describeHotels([])).toEqual([]);
});

test("all hotels", () => {
  expect(describeHotels(HOTELS)).toEqual(["Sea Breeze (5)","Olive Court (1)","Northern Star (5)","Cityloft (5)","Station Hotel (3)","Old Mill (1)","Sky Garden (5)","Maple House (2)"]);
});
