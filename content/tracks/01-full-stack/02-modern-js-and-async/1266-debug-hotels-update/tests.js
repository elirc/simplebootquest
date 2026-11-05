const HOTELS = [
  {id: 1, name: "Sky Garden", nightlyPrice: 297, stars: 4, city: "Kyoto", breakfast: true},
  {id: 2, name: "Northern Star", nightlyPrice: 88, stars: 4, city: "Toronto", breakfast: true},
  {id: 3, name: "Sea Breeze", nightlyPrice: 199, stars: 3, city: "Lisbon", breakfast: true},
  {id: 4, name: "Olive Court", nightlyPrice: 382, stars: 1, city: "Lisbon", breakfast: true},
  {id: 5, name: "The Grand", nightlyPrice: 243, stars: 4, city: "Lisbon", breakfast: true},
  {id: 6, name: "Station Hotel", nightlyPrice: 280, stars: 3, city: "Kyoto", breakfast: true},
  {id: 7, name: "Cityloft", nightlyPrice: 303, stars: 2, city: "Toronto", breakfast: true},
  {id: 8, name: "Old Mill", nightlyPrice: 112, stars: 3, city: "Lisbon", breakfast: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(HOTELS);
  bumpStars(HOTELS, "Lisbon", 10);
  expect(JSON.stringify(HOTELS)).toBe(before);
});

test("with \"Lisbon\", 10", () => {
  expect(bumpStars(HOTELS, "Lisbon", 10)).toEqual([{"id":1,"name":"Sky Garden","nightlyPrice":297,"stars":4,"city":"Kyoto","breakfast":true},{"id":2,"name":"Northern Star","nightlyPrice":88,"stars":4,"city":"Toronto","breakfast":true},{"id":3,"name":"Sea Breeze","nightlyPrice":199,"stars":13,"city":"Lisbon","breakfast":true},{"id":4,"name":"Olive Court","nightlyPrice":382,"stars":11,"city":"Lisbon","breakfast":true},{"id":5,"name":"The Grand","nightlyPrice":243,"stars":14,"city":"Lisbon","breakfast":true},{"id":6,"name":"Station Hotel","nightlyPrice":280,"stars":3,"city":"Kyoto","breakfast":true},{"id":7,"name":"Cityloft","nightlyPrice":303,"stars":2,"city":"Toronto","breakfast":true},{"id":8,"name":"Old Mill","nightlyPrice":112,"stars":13,"city":"Lisbon","breakfast":true}]);
});

test("with \"Kyoto\", 1", () => {
  expect(bumpStars(HOTELS, "Kyoto", 1)).toEqual([{"id":1,"name":"Sky Garden","nightlyPrice":297,"stars":5,"city":"Kyoto","breakfast":true},{"id":2,"name":"Northern Star","nightlyPrice":88,"stars":4,"city":"Toronto","breakfast":true},{"id":3,"name":"Sea Breeze","nightlyPrice":199,"stars":3,"city":"Lisbon","breakfast":true},{"id":4,"name":"Olive Court","nightlyPrice":382,"stars":1,"city":"Lisbon","breakfast":true},{"id":5,"name":"The Grand","nightlyPrice":243,"stars":4,"city":"Lisbon","breakfast":true},{"id":6,"name":"Station Hotel","nightlyPrice":280,"stars":4,"city":"Kyoto","breakfast":true},{"id":7,"name":"Cityloft","nightlyPrice":303,"stars":2,"city":"Toronto","breakfast":true},{"id":8,"name":"Old Mill","nightlyPrice":112,"stars":3,"city":"Lisbon","breakfast":true}]);
});
