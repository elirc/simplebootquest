const EVENTS = [
  {id: 1, name: "Book Club", capacity: 107, registered: 287, format: "online", free: false},
  {id: 2, name: "Hackathon", capacity: 302, registered: 207, format: "online", free: true},
  {id: 3, name: "Startup Night", capacity: 243, registered: 51, format: "hybrid", free: false},
  {id: 4, name: "Open Mic", capacity: 108, registered: 227, format: "online", free: true},
  {id: 5, name: "JS Meetup", capacity: 70, registered: 188, format: "hybrid", free: false},
  {id: 6, name: "Career Fair", capacity: 258, registered: 167, format: "in-person", free: true},
  {id: 7, name: "Game Night", capacity: 196, registered: 240, format: "in-person", free: false},
  {id: 8, name: "Design Jam", capacity: 186, registered: 254, format: "online", free: true}
];

test("an empty list", () => {
  expect(highestCapacity([])).toEqual(null);
});

test("all events", () => {
  expect(highestCapacity(EVENTS)).toEqual("Hackathon");
});
