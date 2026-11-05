const EVENTS = [
  {id: 1, name: "Demo Day", capacity: 252, registered: 343, format: "hybrid", free: false},
  {id: 2, name: "Open Mic", capacity: 366, registered: 194, format: "hybrid", free: false},
  {id: 3, name: "Game Night", capacity: 39, registered: 198, format: "hybrid", free: true},
  {id: 4, name: "Code Dojo", capacity: 397, registered: 29, format: "in-person", free: false},
  {id: 5, name: "Career Fair", capacity: 397, registered: 181, format: "hybrid", free: false},
  {id: 6, name: "Design Jam", capacity: 310, registered: 349, format: "in-person", free: true},
  {id: 7, name: "JS Meetup", capacity: 67, registered: 178, format: "in-person", free: false},
  {id: 8, name: "Workshop", capacity: 368, registered: 80, format: "in-person", free: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(EVENTS);
  eventsByCapacity(EVENTS);
  expect(JSON.stringify(EVENTS)).toBe(before);
});

test("all events", () => {
  expect(eventsByCapacity(EVENTS)).toEqual(["Game Night","JS Meetup","Demo Day","Design Jam","Open Mic","Workshop","Code Dojo","Career Fair"]);
});
