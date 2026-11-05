const EVENTS = [
  {id: 1, name: "Game Night", capacity: 149, registered: 105, format: "in-person", free: true},
  {id: 2, name: "JS Meetup", capacity: 216, registered: 319, format: "online", free: false},
  {id: 3, name: "Career Fair", capacity: 142, registered: 104, format: "in-person", free: false},
  {id: 4, name: "AI Panel", capacity: 325, registered: 345, format: "hybrid", free: false},
  {id: 5, name: "Demo Day", capacity: 97, registered: 352, format: "hybrid", free: true},
  {id: 6, name: "Code Dojo", capacity: 23, registered: 54, format: "online", free: false},
  {id: 7, name: "Design Jam", capacity: 155, registered: 40, format: "online", free: false},
  {id: 8, name: "Hackathon", capacity: 302, registered: 172, format: "in-person", free: false}
];

test("an empty list", () => {
  expect(averageRegistered([])).toEqual(null);
});

test("all events", () => {
  expect(averageRegistered(EVENTS)).toEqual(186.4);
});
