const EVENTS = [
  {id: 1, name: "AI Panel", capacity: 314, registered: 208, format: "hybrid", free: true},
  {id: 2, name: "Book Club", capacity: 42, registered: 11, format: "online", free: true},
  {id: 3, name: "Design Jam", capacity: 111, registered: 97, format: "hybrid", free: true},
  {id: 4, name: "Hackathon", capacity: 189, registered: 253, format: "in-person", free: false},
  {id: 5, name: "Game Night", capacity: 208, registered: 315, format: "in-person", free: true},
  {id: 6, name: "Startup Night", capacity: 189, registered: 41, format: "in-person", free: false},
  {id: 7, name: "Demo Day", capacity: 229, registered: 164, format: "in-person", free: true},
  {id: 8, name: "Code Dojo", capacity: 264, registered: 285, format: "online", free: false}
];

test("with 97", () => {
  expect(allEventsUnder(EVENTS, 97)).toEqual(false);
});

test("with 316", () => {
  expect(allEventsUnder(EVENTS, 316)).toEqual(true);
});

test("with 315", () => {
  expect(allEventsUnder(EVENTS, 315)).toEqual(false);
});
