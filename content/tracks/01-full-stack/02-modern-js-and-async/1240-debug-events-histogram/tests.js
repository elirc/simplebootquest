const EVENTS = [
  {id: 1, name: "Demo Day", capacity: 237, registered: 14, format: "hybrid", free: false},
  {id: 2, name: "Workshop", capacity: 26, registered: 341, format: "hybrid", free: false},
  {id: 3, name: "Book Club", capacity: 102, registered: 284, format: "in-person", free: false},
  {id: 4, name: "Game Night", capacity: 100, registered: 69, format: "online", free: false},
  {id: 5, name: "Open Mic", capacity: 219, registered: 288, format: "hybrid", free: false},
  {id: 6, name: "JS Meetup", capacity: 80, registered: 182, format: "hybrid", free: false},
  {id: 7, name: "Career Fair", capacity: 142, registered: 99, format: "online", free: true},
  {id: 8, name: "AI Panel", capacity: 24, registered: 295, format: "online", free: true}
];

test("with 95", () => {
  expect(registeredHistogram(EVENTS, 95)).toEqual({"0":2,"95":2,"190":1,"285":3});
});

test("with 190", () => {
  expect(registeredHistogram(EVENTS, 190)).toEqual({"0":4,"190":4});
});
