test('does not mutate the input', () => {
  const before = JSON.stringify(HOTELS);
  bumpStars(HOTELS, "Lisbon", 10);
  expect(JSON.stringify(HOTELS)).toBe(before);
});

test("with \"Lisbon\", 10", () => {
  expect(bumpStars(HOTELS, "Lisbon", 10)).toEqual([{"id":1,"name":"Northern Star","nightlyPrice":244,"stars":1,"city":"Toronto","breakfast":true},{"id":2,"name":"Station Hotel","nightlyPrice":94,"stars":2,"city":"Toronto","breakfast":true},{"id":3,"name":"Olive Court","nightlyPrice":283,"stars":2,"city":"Toronto","breakfast":true},{"id":4,"name":"Harbour View","nightlyPrice":362,"stars":2,"city":"Kyoto","breakfast":true},{"id":5,"name":"Pine Lodge","nightlyPrice":61,"stars":1,"city":"Toronto","breakfast":true},{"id":6,"name":"Cityloft","nightlyPrice":68,"stars":3,"city":"Toronto","breakfast":false},{"id":7,"name":"Old Mill","nightlyPrice":302,"stars":14,"city":"Lisbon","breakfast":false},{"id":8,"name":"Riverside Inn","nightlyPrice":334,"stars":4,"city":"Kyoto","breakfast":true}]);
});

test("with \"Kyoto\", 1", () => {
  expect(bumpStars(HOTELS, "Kyoto", 1)).toEqual([{"id":1,"name":"Northern Star","nightlyPrice":244,"stars":1,"city":"Toronto","breakfast":true},{"id":2,"name":"Station Hotel","nightlyPrice":94,"stars":2,"city":"Toronto","breakfast":true},{"id":3,"name":"Olive Court","nightlyPrice":283,"stars":2,"city":"Toronto","breakfast":true},{"id":4,"name":"Harbour View","nightlyPrice":362,"stars":3,"city":"Kyoto","breakfast":true},{"id":5,"name":"Pine Lodge","nightlyPrice":61,"stars":1,"city":"Toronto","breakfast":true},{"id":6,"name":"Cityloft","nightlyPrice":68,"stars":3,"city":"Toronto","breakfast":false},{"id":7,"name":"Old Mill","nightlyPrice":302,"stars":4,"city":"Lisbon","breakfast":false},{"id":8,"name":"Riverside Inn","nightlyPrice":334,"stars":5,"city":"Kyoto","breakfast":true}]);
});
