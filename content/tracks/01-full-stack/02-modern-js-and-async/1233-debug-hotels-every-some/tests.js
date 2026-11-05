const HOTELS = [
  {id: 1, name: "Old Mill", nightlyPrice: 59, stars: 1, city: "Lisbon", breakfast: false},
  {id: 2, name: "The Grand", nightlyPrice: 55, stars: 1, city: "Kyoto", breakfast: true},
  {id: 3, name: "Maple House", nightlyPrice: 65, stars: 2, city: "Kyoto", breakfast: true},
  {id: 4, name: "Sky Garden", nightlyPrice: 336, stars: 5, city: "Toronto", breakfast: true},
  {id: 5, name: "Cityloft", nightlyPrice: 217, stars: 5, city: "Toronto", breakfast: false},
  {id: 6, name: "Pine Lodge", nightlyPrice: 173, stars: 3, city: "Toronto", breakfast: false},
  {id: 7, name: "Riverside Inn", nightlyPrice: 68, stars: 2, city: "Toronto", breakfast: true},
  {id: 8, name: "Northern Star", nightlyPrice: 189, stars: 3, city: "Kyoto", breakfast: true}
];

test("with 65", () => {
  expect(allHotelsUnder(HOTELS, 65)).toEqual(false);
});

test("with 337", () => {
  expect(allHotelsUnder(HOTELS, 337)).toEqual(true);
});

test("with 336", () => {
  expect(allHotelsUnder(HOTELS, 336)).toEqual(false);
});
