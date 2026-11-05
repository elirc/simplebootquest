const HOTELS = [
  {id: 1, name: "Olive Court", nightlyPrice: 308, stars: 3, city: "Toronto", breakfast: false},
  {id: 2, name: "Northern Star", nightlyPrice: 128, stars: 4, city: "Lisbon", breakfast: true},
  {id: 3, name: "Maple House", nightlyPrice: 104, stars: 4, city: "Kyoto", breakfast: true},
  {id: 4, name: "Harbour View", nightlyPrice: 72, stars: 5, city: "Lisbon", breakfast: true},
  {id: 5, name: "Riverside Inn", nightlyPrice: 117, stars: 3, city: "Lisbon", breakfast: true},
  {id: 6, name: "Cityloft", nightlyPrice: 216, stars: 4, city: "Lisbon", breakfast: false},
  {id: 7, name: "Station Hotel", nightlyPrice: 270, stars: 4, city: "Lisbon", breakfast: true},
  {id: 8, name: "Pine Lodge", nightlyPrice: 388, stars: 2, city: "Lisbon", breakfast: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(HOTELS);
  bumpStars(HOTELS, "Lisbon", 10);
  expect(JSON.stringify(HOTELS)).toBe(before);
});

test("with \"Lisbon\", 10", () => {
  expect(bumpStars(HOTELS, "Lisbon", 10)).toEqual([{"id":1,"name":"Olive Court","nightlyPrice":308,"stars":3,"city":"Toronto","breakfast":false},{"id":2,"name":"Northern Star","nightlyPrice":128,"stars":14,"city":"Lisbon","breakfast":true},{"id":3,"name":"Maple House","nightlyPrice":104,"stars":4,"city":"Kyoto","breakfast":true},{"id":4,"name":"Harbour View","nightlyPrice":72,"stars":15,"city":"Lisbon","breakfast":true},{"id":5,"name":"Riverside Inn","nightlyPrice":117,"stars":13,"city":"Lisbon","breakfast":true},{"id":6,"name":"Cityloft","nightlyPrice":216,"stars":14,"city":"Lisbon","breakfast":false},{"id":7,"name":"Station Hotel","nightlyPrice":270,"stars":14,"city":"Lisbon","breakfast":true},{"id":8,"name":"Pine Lodge","nightlyPrice":388,"stars":12,"city":"Lisbon","breakfast":true}]);
});

test("with \"Kyoto\", 1", () => {
  expect(bumpStars(HOTELS, "Kyoto", 1)).toEqual([{"id":1,"name":"Olive Court","nightlyPrice":308,"stars":3,"city":"Toronto","breakfast":false},{"id":2,"name":"Northern Star","nightlyPrice":128,"stars":4,"city":"Lisbon","breakfast":true},{"id":3,"name":"Maple House","nightlyPrice":104,"stars":5,"city":"Kyoto","breakfast":true},{"id":4,"name":"Harbour View","nightlyPrice":72,"stars":5,"city":"Lisbon","breakfast":true},{"id":5,"name":"Riverside Inn","nightlyPrice":117,"stars":3,"city":"Lisbon","breakfast":true},{"id":6,"name":"Cityloft","nightlyPrice":216,"stars":4,"city":"Lisbon","breakfast":false},{"id":7,"name":"Station Hotel","nightlyPrice":270,"stars":4,"city":"Lisbon","breakfast":true},{"id":8,"name":"Pine Lodge","nightlyPrice":388,"stars":2,"city":"Lisbon","breakfast":true}]);
});
