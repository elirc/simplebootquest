test('does not mutate the input', () => {
  const before = JSON.stringify(EVENTS);
  bumpRegistered(EVENTS, "in-person", 10);
  expect(JSON.stringify(EVENTS)).toBe(before);
});

test("with \"in-person\", 10", () => {
  expect(bumpRegistered(EVENTS, "in-person", 10)).toEqual([{"id":1,"name":"Open Mic","capacity":96,"registered":199,"format":"online","free":false},{"id":2,"name":"JS Meetup","capacity":197,"registered":224,"format":"hybrid","free":false},{"id":3,"name":"Career Fair","capacity":56,"registered":238,"format":"hybrid","free":true},{"id":4,"name":"Book Club","capacity":102,"registered":115,"format":"in-person","free":true},{"id":5,"name":"Game Night","capacity":134,"registered":356,"format":"hybrid","free":false},{"id":6,"name":"Design Jam","capacity":20,"registered":51,"format":"hybrid","free":true},{"id":7,"name":"AI Panel","capacity":350,"registered":4,"format":"online","free":true},{"id":8,"name":"Workshop","capacity":383,"registered":55,"format":"in-person","free":true}]);
});

test("with \"online\", 1", () => {
  expect(bumpRegistered(EVENTS, "online", 1)).toEqual([{"id":1,"name":"Open Mic","capacity":96,"registered":200,"format":"online","free":false},{"id":2,"name":"JS Meetup","capacity":197,"registered":224,"format":"hybrid","free":false},{"id":3,"name":"Career Fair","capacity":56,"registered":238,"format":"hybrid","free":true},{"id":4,"name":"Book Club","capacity":102,"registered":105,"format":"in-person","free":true},{"id":5,"name":"Game Night","capacity":134,"registered":356,"format":"hybrid","free":false},{"id":6,"name":"Design Jam","capacity":20,"registered":51,"format":"hybrid","free":true},{"id":7,"name":"AI Panel","capacity":350,"registered":5,"format":"online","free":true},{"id":8,"name":"Workshop","capacity":383,"registered":45,"format":"in-person","free":true}]);
});
