const BEFORE = [
  {id: 1, name: "Maple House", nightlyPrice: 320, stars: 2, city: "Lisbon", breakfast: true},
  {id: 2, name: "Northern Star", nightlyPrice: 399, stars: 3, city: "Lisbon", breakfast: true},
  {id: 3, name: "Sky Garden", nightlyPrice: 189, stars: 3, city: "Lisbon", breakfast: false},
  {id: 4, name: "Olive Court", nightlyPrice: 136, stars: 2, city: "Kyoto", breakfast: true},
  {id: 5, name: "Harbour View", nightlyPrice: 365, stars: 2, city: "Toronto", breakfast: true},
  {id: 6, name: "Old Mill", nightlyPrice: 176, stars: 3, city: "Toronto", breakfast: true},
  {id: 7, name: "Cityloft", nightlyPrice: 292, stars: 3, city: "Toronto", breakfast: true},
  {id: 8, name: "Riverside Inn", nightlyPrice: 317, stars: 2, city: "Lisbon", breakfast: false}
];
const AFTER = [
  {id: 1, name: "Maple House", nightlyPrice: 320, stars: 2, city: "Lisbon", breakfast: true},
  {id: 2, name: "Northern Star", nightlyPrice: 406, stars: 3, city: "Lisbon", breakfast: true},
  {id: 3, name: "Sky Garden", nightlyPrice: 189, stars: 3, city: "Lisbon", breakfast: false},
  {id: 4, name: "Olive Court", nightlyPrice: 136, stars: 2, city: "Kyoto", breakfast: true},
  {id: 5, name: "Harbour View", nightlyPrice: 372, stars: 2, city: "Toronto", breakfast: true},
  {id: 6, name: "Old Mill", nightlyPrice: 176, stars: 3, city: "Toronto", breakfast: true},
  {id: 7, name: "Cityloft", nightlyPrice: 292, stars: 3, city: "Toronto", breakfast: true},
  {id: 8, name: "Riverside Inn", nightlyPrice: 324, stars: 2, city: "Lisbon", breakfast: false}
];

test("finds changed ids", () => {
  expect(nightlyPriceChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(nightlyPriceChanges(BEFORE, BEFORE)).toEqual([]);
});
