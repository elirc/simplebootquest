const EVENTS = [
  {id: 1, name: "Design Jam", capacity: 63, registered: 186, format: "hybrid", free: false},
  {id: 2, name: "Career Fair", capacity: 378, registered: 145, format: "in-person", free: false},
  {id: 3, name: "Hackathon", capacity: 226, registered: 87, format: "in-person", free: true},
  {id: 4, name: "AI Panel", capacity: 347, registered: 335, format: "online", free: false},
  {id: 5, name: "Startup Night", capacity: 241, registered: 54, format: "hybrid", free: false},
  {id: 6, name: "Open Mic", capacity: 191, registered: 208, format: "hybrid", free: true},
  {id: 7, name: "Code Dojo", capacity: 64, registered: 353, format: "online", free: false},
  {id: 8, name: "JS Meetup", capacity: 149, registered: 321, format: "online", free: true}
];

test("an empty list", () => {
  expect(highestCapacity([])).toEqual(null);
});

test("all events", () => {
  expect(highestCapacity(EVENTS)).toEqual("Career Fair");
});
