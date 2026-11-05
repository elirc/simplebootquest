const HOTELS = [
  {id: 1, name: "Old Mill", nightlyPrice: 212, stars: 2, city: "Lisbon", breakfast: true},
  {id: 2, name: "Harbour View", nightlyPrice: 48, stars: 1, city: "Lisbon", breakfast: true},
  {id: 3, name: "Maple House", nightlyPrice: 265, stars: 1, city: "Lisbon", breakfast: false},
  {id: 4, name: "Station Hotel", nightlyPrice: 177, stars: 5, city: "Lisbon", breakfast: false},
  {id: 5, name: "Riverside Inn", nightlyPrice: 70, stars: 4, city: "Toronto", breakfast: false},
  {id: 6, name: "Cityloft", nightlyPrice: 216, stars: 2, city: "Toronto", breakfast: true},
  {id: 7, name: "Olive Court", nightlyPrice: 188, stars: 4, city: "Toronto", breakfast: false},
  {id: 8, name: "Sea Breeze", nightlyPrice: 130, stars: 3, city: "Lisbon", breakfast: false}
];

test("with \"Lisbon\"", () => {
  expect(countHotelsByCity(HOTELS, "Lisbon")).toEqual(5);
});

test("with \"Kyoto\"", () => {
  expect(countHotelsByCity(HOTELS, "Kyoto")).toEqual(0);
});

test("with \"Toronto\"", () => {
  expect(countHotelsByCity(HOTELS, "Toronto")).toEqual(3);
});

test("with \"nope\"", () => {
  expect(countHotelsByCity(HOTELS, "nope")).toEqual(0);
});
