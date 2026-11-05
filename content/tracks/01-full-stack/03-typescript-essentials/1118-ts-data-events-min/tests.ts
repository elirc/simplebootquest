const EVENTS = [
  {id: 1, name: "Career Fair", capacity: 45, registered: 359, format: "in-person", free: true},
  {id: 2, name: "Code Dojo", capacity: 355, registered: 188, format: "online", free: false},
  {id: 3, name: "Design Jam", capacity: 110, registered: 206, format: "hybrid", free: false},
  {id: 4, name: "Startup Night", capacity: 43, registered: 63, format: "online", free: false},
  {id: 5, name: "Workshop", capacity: 140, registered: 57, format: "in-person", free: false},
  {id: 6, name: "JS Meetup", capacity: 245, registered: 34, format: "in-person", free: true},
  {id: 7, name: "Game Night", capacity: 231, registered: 262, format: "hybrid", free: true},
  {id: 8, name: "Open Mic", capacity: 115, registered: 339, format: "in-person", free: false}
];

test("an empty list", () => {
  expect(lowestCapacity([])).toEqual(null);
});

test("all events", () => {
  expect(lowestCapacity(EVENTS)).toEqual("Startup Night");
});
