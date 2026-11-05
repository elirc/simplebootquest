const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 76, registered: 375, format: "in-person", free: false},
  {id: 2, name: "Workshop", capacity: 211, registered: 310, format: "in-person", free: true},
  {id: 3, name: "JS Meetup", capacity: 336, registered: 67, format: "online", free: true},
  {id: 4, name: "Startup Night", capacity: 38, registered: 110, format: "hybrid", free: false},
  {id: 5, name: "Design Jam", capacity: 391, registered: 211, format: "in-person", free: true},
  {id: 6, name: "Book Club", capacity: 128, registered: 169, format: "hybrid", free: true},
  {id: 7, name: "Code Dojo", capacity: 27, registered: 305, format: "hybrid", free: true},
  {id: 8, name: "Game Night", capacity: 248, registered: 91, format: "online", free: true}
];

test("with 76", () => {
  expect(eventsAbove(EVENTS, 76)).toEqual(["Workshop","JS Meetup","Design Jam","Book Club","Game Night"]);
});

test("with 211", () => {
  expect(eventsAbove(EVENTS, 211)).toEqual(["JS Meetup","Design Jam","Game Night"]);
});

test("with 999999", () => {
  expect(eventsAbove(EVENTS, 999999)).toEqual([]);
});
