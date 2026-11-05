const EVENTS = [
  {id: 1, name: "Demo Day", capacity: 108, registered: 266, format: "in-person", free: true},
  {id: 2, name: "Open Mic", capacity: 172, registered: 107, format: "in-person", free: false},
  {id: 3, name: "JS Meetup", capacity: 141, registered: 147, format: "in-person", free: true},
  {id: 4, name: "AI Panel", capacity: 137, registered: 39, format: "online", free: false},
  {id: 5, name: "Design Jam", capacity: 143, registered: 96, format: "in-person", free: true},
  {id: 6, name: "Hackathon", capacity: 192, registered: 254, format: "hybrid", free: false},
  {id: 7, name: "Career Fair", capacity: 303, registered: 376, format: "online", free: true},
  {id: 8, name: "Code Dojo", capacity: 256, registered: 329, format: "in-person", free: true}
];

test("an empty list", () => {
  expect(averageRegistered([])).toEqual(null);
});

test("all events", () => {
  expect(averageRegistered(EVENTS)).toEqual(201.8);
});
