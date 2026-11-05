const HOTELS = [
  {id: 1, name: "Old Mill", nightlyPrice: 272, stars: 2, city: "Lisbon", breakfast: true},
  {id: 2, name: "Olive Court", nightlyPrice: 78, stars: 4, city: "Lisbon", breakfast: false},
  {id: 3, name: "Cityloft", nightlyPrice: 387, stars: 2, city: "Lisbon", breakfast: false},
  {id: 4, name: "Sky Garden", nightlyPrice: 328, stars: 2, city: "Kyoto", breakfast: true},
  {id: 5, name: "Maple House", nightlyPrice: 255, stars: 2, city: "Kyoto", breakfast: false},
  {id: 6, name: "Northern Star", nightlyPrice: 333, stars: 2, city: "Kyoto", breakfast: false},
  {id: 7, name: "Station Hotel", nightlyPrice: 176, stars: 3, city: "Lisbon", breakfast: true},
  {id: 8, name: "Riverside Inn", nightlyPrice: 63, stars: 1, city: "Kyoto", breakfast: true}
];

test("with \"Lisbon\"", () => {
  expect(countHotelsByCity(HOTELS, "Lisbon")).toEqual(4);
});

test("with \"Kyoto\"", () => {
  expect(countHotelsByCity(HOTELS, "Kyoto")).toEqual(4);
});

test("with \"Toronto\"", () => {
  expect(countHotelsByCity(HOTELS, "Toronto")).toEqual(0);
});

test("with \"nope\"", () => {
  expect(countHotelsByCity(HOTELS, "nope")).toEqual(0);
});
