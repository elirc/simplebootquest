const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 185, registered: 96, format: "online", free: true},
  {id: 2, name: "AI Panel", capacity: 380, registered: 72, format: "online", free: true},
  {id: 3, name: "Demo Day", capacity: 96, registered: 156, format: "in-person", free: true},
  {id: 4, name: "Open Mic", capacity: 210, registered: 329, format: "hybrid", free: false},
  {id: 5, name: "Book Club", capacity: 116, registered: 310, format: "hybrid", free: false},
  {id: 6, name: "Career Fair", capacity: 357, registered: 98, format: "in-person", free: false},
  {id: 7, name: "JS Meetup", capacity: 345, registered: 305, format: "hybrid", free: true},
  {id: 8, name: "Game Night", capacity: 170, registered: 113, format: "online", free: false}
];

test("with \"in-person\"", () => {
  expect(countEventsByFormat(EVENTS, "in-person")).toEqual(2);
});

test("with \"online\"", () => {
  expect(countEventsByFormat(EVENTS, "online")).toEqual(3);
});

test("with \"hybrid\"", () => {
  expect(countEventsByFormat(EVENTS, "hybrid")).toEqual(3);
});

test("with \"nope\"", () => {
  expect(countEventsByFormat(EVENTS, "nope")).toEqual(0);
});
