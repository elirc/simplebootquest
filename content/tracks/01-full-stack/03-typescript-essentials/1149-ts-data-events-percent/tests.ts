const EVENTS = [
  {id: 1, name: "AI Panel", capacity: 216, registered: 91, format: "hybrid", free: false},
  {id: 2, name: "Book Club", capacity: 182, registered: 47, format: "hybrid", free: true},
  {id: 3, name: "Career Fair", capacity: 270, registered: 8, format: "in-person", free: true},
  {id: 4, name: "Demo Day", capacity: 342, registered: 280, format: "hybrid", free: true},
  {id: 5, name: "Game Night", capacity: 207, registered: 94, format: "hybrid", free: false},
  {id: 6, name: "Hackathon", capacity: 183, registered: 174, format: "online", free: false},
  {id: 7, name: "Code Dojo", capacity: 107, registered: 268, format: "online", free: false},
  {id: 8, name: "Startup Night", capacity: 365, registered: 81, format: "in-person", free: true}
];

test("an empty list", () => {
  expect(percentFree([])).toEqual(0);
});

test("all events", () => {
  expect(percentFree(EVENTS)).toEqual(50);
});
