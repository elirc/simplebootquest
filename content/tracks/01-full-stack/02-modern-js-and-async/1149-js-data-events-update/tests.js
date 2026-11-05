const EVENTS = [
  {id: 1, name: "Startup Night", capacity: 320, registered: 288, format: "in-person", free: false},
  {id: 2, name: "Open Mic", capacity: 327, registered: 47, format: "online", free: true},
  {id: 3, name: "Workshop", capacity: 289, registered: 124, format: "hybrid", free: false},
  {id: 4, name: "AI Panel", capacity: 311, registered: 191, format: "hybrid", free: false},
  {id: 5, name: "Career Fair", capacity: 195, registered: 52, format: "in-person", free: false},
  {id: 6, name: "Code Dojo", capacity: 97, registered: 305, format: "in-person", free: false},
  {id: 7, name: "Game Night", capacity: 383, registered: 350, format: "in-person", free: false},
  {id: 8, name: "Demo Day", capacity: 75, registered: 59, format: "online", free: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(EVENTS);
  bumpCapacity(EVENTS, "in-person", 10);
  expect(JSON.stringify(EVENTS)).toBe(before);
});

test("with \"in-person\", 10", () => {
  expect(bumpCapacity(EVENTS, "in-person", 10)).toEqual([{"id":1,"name":"Startup Night","capacity":330,"registered":288,"format":"in-person","free":false},{"id":2,"name":"Open Mic","capacity":327,"registered":47,"format":"online","free":true},{"id":3,"name":"Workshop","capacity":289,"registered":124,"format":"hybrid","free":false},{"id":4,"name":"AI Panel","capacity":311,"registered":191,"format":"hybrid","free":false},{"id":5,"name":"Career Fair","capacity":205,"registered":52,"format":"in-person","free":false},{"id":6,"name":"Code Dojo","capacity":107,"registered":305,"format":"in-person","free":false},{"id":7,"name":"Game Night","capacity":393,"registered":350,"format":"in-person","free":false},{"id":8,"name":"Demo Day","capacity":75,"registered":59,"format":"online","free":false}]);
});

test("with \"online\", 1", () => {
  expect(bumpCapacity(EVENTS, "online", 1)).toEqual([{"id":1,"name":"Startup Night","capacity":320,"registered":288,"format":"in-person","free":false},{"id":2,"name":"Open Mic","capacity":328,"registered":47,"format":"online","free":true},{"id":3,"name":"Workshop","capacity":289,"registered":124,"format":"hybrid","free":false},{"id":4,"name":"AI Panel","capacity":311,"registered":191,"format":"hybrid","free":false},{"id":5,"name":"Career Fair","capacity":195,"registered":52,"format":"in-person","free":false},{"id":6,"name":"Code Dojo","capacity":97,"registered":305,"format":"in-person","free":false},{"id":7,"name":"Game Night","capacity":383,"registered":350,"format":"in-person","free":false},{"id":8,"name":"Demo Day","capacity":76,"registered":59,"format":"online","free":false}]);
});
