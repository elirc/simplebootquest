const EVENTS = [
  {id: 1, name: "Open Mic", capacity: 216, registered: 7, format: "online", free: true},
  {id: 2, name: "Design Jam", capacity: 151, registered: 210, format: "hybrid", free: true},
  {id: 3, name: "Workshop", capacity: 168, registered: 272, format: "in-person", free: false},
  {id: 4, name: "Demo Day", capacity: 168, registered: 275, format: "online", free: false},
  {id: 5, name: "Code Dojo", capacity: 394, registered: 84, format: "hybrid", free: true},
  {id: 6, name: "AI Panel", capacity: 184, registered: 161, format: "online", free: true},
  {id: 7, name: "Career Fair", capacity: 84, registered: 280, format: "in-person", free: false},
  {id: 8, name: "Game Night", capacity: 146, registered: 236, format: "in-person", free: true}
];

test("with 1", () => {
  expect(nthByCapacity(EVENTS, 1)).toEqual("Code Dojo");
});

test("with 2", () => {
  expect(nthByCapacity(EVENTS, 2)).toEqual("Open Mic");
});

test("with 5", () => {
  expect(nthByCapacity(EVENTS, 5)).toEqual("Demo Day");
});

test("with 0", () => {
  expect(nthByCapacity(EVENTS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByCapacity(EVENTS, 99)).toEqual(null);
});
