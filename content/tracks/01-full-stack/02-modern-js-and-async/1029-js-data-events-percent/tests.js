const EVENTS = [
  {id: 1, name: "Book Club", capacity: 250, registered: 36, format: "online", free: true},
  {id: 2, name: "Workshop", capacity: 103, registered: 32, format: "hybrid", free: true},
  {id: 3, name: "Open Mic", capacity: 85, registered: 50, format: "online", free: false},
  {id: 4, name: "JS Meetup", capacity: 178, registered: 148, format: "hybrid", free: false},
  {id: 5, name: "Design Jam", capacity: 140, registered: 298, format: "in-person", free: false},
  {id: 6, name: "AI Panel", capacity: 258, registered: 278, format: "online", free: true},
  {id: 7, name: "Code Dojo", capacity: 356, registered: 300, format: "in-person", free: false},
  {id: 8, name: "Hackathon", capacity: 392, registered: 334, format: "in-person", free: false}
];

test("an empty list", () => {
  expect(percentFree([])).toEqual(0);
});

test("all events", () => {
  expect(percentFree(EVENTS)).toEqual(38);
});
