const EVENTS = [
  {id: 1, name: "Game Night", capacity: 334, registered: 172, format: "online", free: true},
  {id: 2, name: "JS Meetup", capacity: 23, registered: 195, format: "online", free: false},
  {id: 3, name: "Open Mic", capacity: 44, registered: 191, format: "in-person", free: false},
  {id: 4, name: "Hackathon", capacity: 144, registered: 262, format: "online", free: false},
  {id: 5, name: "AI Panel", capacity: 294, registered: 226, format: "online", free: false},
  {id: 6, name: "Book Club", capacity: 151, registered: 339, format: "in-person", free: true},
  {id: 7, name: "Career Fair", capacity: 334, registered: 319, format: "hybrid", free: true},
  {id: 8, name: "Demo Day", capacity: 219, registered: 346, format: "online", free: false}
];

test("with \"AI Panel\"", () => {
  expect(capacityOf(EVENTS, "AI Panel")).toEqual(294);
});

test("with \"Nope\"", () => {
  expect(capacityOf(EVENTS, "Nope")).toEqual(null);
});
