const EVENTS = [
  {id: 1, name: "AI Panel", capacity: 292, registered: 146, format: "in-person", free: true},
  {id: 2, name: "Career Fair", capacity: 70, registered: 113, format: "online", free: true},
  {id: 3, name: "Design Jam", capacity: 28, registered: 68, format: "online", free: true},
  {id: 4, name: "Workshop", capacity: 199, registered: 218, format: "hybrid", free: true},
  {id: 5, name: "Code Dojo", capacity: 256, registered: 7, format: "hybrid", free: false},
  {id: 6, name: "Demo Day", capacity: 347, registered: 240, format: "in-person", free: true},
  {id: 7, name: "Startup Night", capacity: 320, registered: 338, format: "hybrid", free: false},
  {id: 8, name: "Game Night", capacity: 88, registered: 65, format: "hybrid", free: true}
];

test("an empty list", () => {
  expect(percentFree([])).toEqual(0);
});

test("all events", () => {
  expect(percentFree(EVENTS)).toEqual(75);
});
