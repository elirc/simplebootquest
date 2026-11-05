const EVENTS = [
  {id: 1, name: "Code Dojo", capacity: 297, registered: 179, format: "in-person", free: false},
  {id: 2, name: "Workshop", capacity: 139, registered: 92, format: "online", free: false},
  {id: 3, name: "Game Night", capacity: 89, registered: 41, format: "in-person", free: false},
  {id: 4, name: "JS Meetup", capacity: 262, registered: 229, format: "hybrid", free: false},
  {id: 5, name: "Open Mic", capacity: 280, registered: 85, format: "online", free: false},
  {id: 6, name: "Hackathon", capacity: 337, registered: 136, format: "hybrid", free: false},
  {id: 7, name: "Book Club", capacity: 350, registered: 44, format: "hybrid", free: false},
  {id: 8, name: "Career Fair", capacity: 204, registered: 218, format: "online", free: true}
];

test("an empty list", () => {
  expect(countEventsPerFormat([])).toEqual({});
});

test("all events", () => {
  expect(countEventsPerFormat(EVENTS)).toEqual({"in-person":2,"online":3,"hybrid":3});
});
