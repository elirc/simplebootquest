const EVENTS = [
  {id: 1, name: "Open Mic", capacity: 343, registered: 77, format: "online", free: true},
  {id: 2, name: "Startup Night", capacity: 286, registered: 91, format: "hybrid", free: false},
  {id: 3, name: "Game Night", capacity: 41, registered: 360, format: "hybrid", free: false},
  {id: 4, name: "Career Fair", capacity: 156, registered: 302, format: "in-person", free: false},
  {id: 5, name: "Book Club", capacity: 329, registered: 262, format: "hybrid", free: false},
  {id: 6, name: "Design Jam", capacity: 237, registered: 193, format: "online", free: true},
  {id: 7, name: "Hackathon", capacity: 262, registered: 117, format: "in-person", free: true},
  {id: 8, name: "JS Meetup", capacity: 103, registered: 260, format: "online", free: true}
];

test("with 1", () => {
  expect(nthByRegistered(EVENTS, 1)).toEqual("Game Night");
});

test("with 2", () => {
  expect(nthByRegistered(EVENTS, 2)).toEqual("Career Fair");
});

test("with 5", () => {
  expect(nthByRegistered(EVENTS, 5)).toEqual("Design Jam");
});

test("with 0", () => {
  expect(nthByRegistered(EVENTS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByRegistered(EVENTS, 99)).toEqual(null);
});
