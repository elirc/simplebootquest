const EVENTS = [
  {id: 1, name: "Demo Day", capacity: 328, registered: 57, format: "online", free: false},
  {id: 2, name: "Hackathon", capacity: 378, registered: 195, format: "in-person", free: true},
  {id: 3, name: "AI Panel", capacity: 180, registered: 93, format: "in-person", free: false},
  {id: 4, name: "Startup Night", capacity: 372, registered: 58, format: "online", free: true},
  {id: 5, name: "JS Meetup", capacity: 284, registered: 98, format: "hybrid", free: false},
  {id: 6, name: "Code Dojo", capacity: 50, registered: 332, format: "online", free: true},
  {id: 7, name: "Open Mic", capacity: 381, registered: 163, format: "hybrid", free: true},
  {id: 8, name: "Book Club", capacity: 390, registered: 352, format: "online", free: true}
];

test("with 93", () => {
  expect(allEventsUnder(EVENTS, 93)).toEqual(false);
});

test("with 353", () => {
  expect(allEventsUnder(EVENTS, 353)).toEqual(true);
});

test("with 352", () => {
  expect(allEventsUnder(EVENTS, 352)).toEqual(false);
});
