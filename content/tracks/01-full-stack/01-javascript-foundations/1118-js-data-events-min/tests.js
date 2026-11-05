const EVENTS = [
  {id: 1, name: "JS Meetup", capacity: 174, registered: 372, format: "in-person", free: true},
  {id: 2, name: "Game Night", capacity: 197, registered: 262, format: "in-person", free: true},
  {id: 3, name: "Hackathon", capacity: 252, registered: 165, format: "hybrid", free: true},
  {id: 4, name: "Startup Night", capacity: 271, registered: 363, format: "in-person", free: false},
  {id: 5, name: "Workshop", capacity: 256, registered: 218, format: "in-person", free: false},
  {id: 6, name: "Open Mic", capacity: 81, registered: 298, format: "in-person", free: true},
  {id: 7, name: "Book Club", capacity: 71, registered: 34, format: "in-person", free: false},
  {id: 8, name: "Design Jam", capacity: 28, registered: 287, format: "in-person", free: false}
];

test("an empty list", () => {
  expect(lowestRegistered([])).toEqual(null);
});

test("all events", () => {
  expect(lowestRegistered(EVENTS)).toEqual("Book Club");
});
