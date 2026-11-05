const HOTELS = [
  {id: 1, name: "Cityloft", nightlyPrice: 227, stars: 2, city: "Lisbon", breakfast: true},
  {id: 2, name: "Station Hotel", nightlyPrice: 342, stars: 4, city: "Kyoto", breakfast: false},
  {id: 3, name: "Riverside Inn", nightlyPrice: 345, stars: 2, city: "Toronto", breakfast: false},
  {id: 4, name: "Sea Breeze", nightlyPrice: 308, stars: 3, city: "Kyoto", breakfast: true},
  {id: 5, name: "Harbour View", nightlyPrice: 299, stars: 2, city: "Lisbon", breakfast: true},
  {id: 6, name: "Old Mill", nightlyPrice: 99, stars: 3, city: "Toronto", breakfast: false},
  {id: 7, name: "Olive Court", nightlyPrice: 196, stars: 3, city: "Lisbon", breakfast: false},
  {id: 8, name: "Pine Lodge", nightlyPrice: 274, stars: 1, city: "Toronto", breakfast: false}
];

test("with 1", () => {
  expect(nthByStars(HOTELS, 1)).toEqual("Station Hotel");
});

test("with 2", () => {
  expect(nthByStars(HOTELS, 2)).toEqual("Sea Breeze");
});

test("with 5", () => {
  expect(nthByStars(HOTELS, 5)).toEqual("Cityloft");
});

test("with 0", () => {
  expect(nthByStars(HOTELS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByStars(HOTELS, 99)).toEqual(null);
});
