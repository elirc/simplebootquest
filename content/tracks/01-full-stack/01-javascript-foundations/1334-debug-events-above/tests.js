const EVENTS = [
  {id: 1, name: "Workshop", capacity: 122, registered: 222, format: "hybrid", free: false},
  {id: 2, name: "JS Meetup", capacity: 108, registered: 68, format: "in-person", free: true},
  {id: 3, name: "AI Panel", capacity: 395, registered: 335, format: "online", free: true},
  {id: 4, name: "Design Jam", capacity: 379, registered: 120, format: "online", free: false},
  {id: 5, name: "Startup Night", capacity: 208, registered: 139, format: "in-person", free: false},
  {id: 6, name: "Demo Day", capacity: 158, registered: 144, format: "in-person", free: false},
  {id: 7, name: "Game Night", capacity: 351, registered: 256, format: "hybrid", free: true},
  {id: 8, name: "Career Fair", capacity: 38, registered: 77, format: "online", free: false}
];

test("with 120", () => {
  expect(eventsAbove(EVENTS, 120)).toEqual(["Workshop","AI Panel","Startup Night","Demo Day","Game Night"]);
});

test("with 144", () => {
  expect(eventsAbove(EVENTS, 144)).toEqual(["Workshop","AI Panel","Game Night"]);
});

test("with 999999", () => {
  expect(eventsAbove(EVENTS, 999999)).toEqual([]);
});
