const HOTELS = [
  {id: 1, name: "Station Hotel", nightlyPrice: 418, stars: 3, city: "Lisbon", breakfast: false},
  {id: 2, name: "Riverside Inn", nightlyPrice: 156, stars: 3, city: "Kyoto", breakfast: true},
  {id: 3, name: "Olive Court", nightlyPrice: 397, stars: 2, city: "Kyoto", breakfast: false},
  {id: 4, name: "Harbour View", nightlyPrice: 62, stars: 1, city: "Kyoto", breakfast: true},
  {id: 5, name: "The Grand", nightlyPrice: 182, stars: 5, city: "Kyoto", breakfast: true},
  {id: 6, name: "Sea Breeze", nightlyPrice: 136, stars: 5, city: "Lisbon", breakfast: false},
  {id: 7, name: "Cityloft", nightlyPrice: 285, stars: 3, city: "Toronto", breakfast: false},
  {id: 8, name: "Sky Garden", nightlyPrice: 250, stars: 4, city: "Lisbon", breakfast: true}
];

test("with 156", () => {
  expect(allHotelsUnder(HOTELS, 156)).toEqual(false);
});

test("with 419", () => {
  expect(allHotelsUnder(HOTELS, 419)).toEqual(true);
});

test("with 418", () => {
  expect(allHotelsUnder(HOTELS, 418)).toEqual(false);
});
