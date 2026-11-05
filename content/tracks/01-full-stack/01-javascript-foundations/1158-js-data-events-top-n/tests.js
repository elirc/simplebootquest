const EVENTS = [
  {id: 1, name: "Code Dojo", capacity: 110, registered: 41, format: "online", free: true},
  {id: 2, name: "Open Mic", capacity: 214, registered: 335, format: "online", free: false},
  {id: 3, name: "JS Meetup", capacity: 169, registered: 93, format: "online", free: true},
  {id: 4, name: "AI Panel", capacity: 115, registered: 197, format: "hybrid", free: true},
  {id: 5, name: "Game Night", capacity: 251, registered: 329, format: "hybrid", free: false},
  {id: 6, name: "Design Jam", capacity: 385, registered: 215, format: "online", free: false},
  {id: 7, name: "Career Fair", capacity: 299, registered: 94, format: "in-person", free: false},
  {id: 8, name: "Workshop", capacity: 108, registered: 234, format: "hybrid", free: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(EVENTS);
  topEventsByCapacity(EVENTS, 1);
  expect(JSON.stringify(EVENTS)).toBe(before);
});

test("with 1", () => {
  expect(topEventsByCapacity(EVENTS, 1)).toEqual(["Design Jam"]);
});

test("with 3", () => {
  expect(topEventsByCapacity(EVENTS, 3)).toEqual(["Design Jam","Career Fair","Game Night"]);
});

test("with 0", () => {
  expect(topEventsByCapacity(EVENTS, 0)).toEqual([]);
});
