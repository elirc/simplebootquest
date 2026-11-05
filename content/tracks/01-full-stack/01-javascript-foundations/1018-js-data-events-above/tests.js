const EVENTS = [
  {id: 1, name: "Open Mic", capacity: 30, registered: 44, format: "online", free: false},
  {id: 2, name: "Game Night", capacity: 153, registered: 273, format: "in-person", free: true},
  {id: 3, name: "JS Meetup", capacity: 266, registered: 368, format: "hybrid", free: false},
  {id: 4, name: "Design Jam", capacity: 27, registered: 256, format: "online", free: false},
  {id: 5, name: "Book Club", capacity: 39, registered: 31, format: "hybrid", free: false},
  {id: 6, name: "Code Dojo", capacity: 235, registered: 167, format: "in-person", free: true},
  {id: 7, name: "Startup Night", capacity: 31, registered: 111, format: "in-person", free: true},
  {id: 8, name: "Workshop", capacity: 230, registered: 330, format: "in-person", free: false}
];

test("with 111", () => {
  expect(eventsAbove(EVENTS, 111)).toEqual(["Game Night","JS Meetup","Design Jam","Code Dojo","Workshop"]);
});

test("with 256", () => {
  expect(eventsAbove(EVENTS, 256)).toEqual(["Game Night","JS Meetup","Workshop"]);
});

test("with 999999", () => {
  expect(eventsAbove(EVENTS, 999999)).toEqual([]);
});
