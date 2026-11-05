const EVENTS = [
  {id: 1, name: "Game Night", capacity: 208, registered: 313, format: "hybrid", free: true},
  {id: 2, name: "Demo Day", capacity: 308, registered: 197, format: "hybrid", free: true},
  {id: 3, name: "JS Meetup", capacity: 279, registered: 224, format: "online", free: false},
  {id: 4, name: "Design Jam", capacity: 297, registered: 80, format: "online", free: true},
  {id: 5, name: "Open Mic", capacity: 185, registered: 15, format: "online", free: true},
  {id: 6, name: "Code Dojo", capacity: 105, registered: 167, format: "hybrid", free: true},
  {id: 7, name: "AI Panel", capacity: 102, registered: 295, format: "in-person", free: true},
  {id: 8, name: "Career Fair", capacity: 361, registered: 96, format: "hybrid", free: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(EVENTS);
  topEventsByCapacity(EVENTS, 1);
  expect(JSON.stringify(EVENTS)).toBe(before);
});

test("with 1", () => {
  expect(topEventsByCapacity(EVENTS, 1)).toEqual(["Career Fair"]);
});

test("with 3", () => {
  expect(topEventsByCapacity(EVENTS, 3)).toEqual(["Career Fair","Demo Day","Design Jam"]);
});

test("with 0", () => {
  expect(topEventsByCapacity(EVENTS, 0)).toEqual([]);
});
