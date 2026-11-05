const EVENTS = [
  {id: 1, name: "Design Jam", capacity: 274, registered: 97, format: "online", free: false},
  {id: 2, name: "Game Night", capacity: 243, registered: 331, format: "hybrid", free: true},
  {id: 3, name: "Startup Night", capacity: 143, registered: 271, format: "in-person", free: true},
  {id: 4, name: "JS Meetup", capacity: 143, registered: 340, format: "in-person", free: true},
  {id: 5, name: "Workshop", capacity: 200, registered: 354, format: "online", free: false},
  {id: 6, name: "Hackathon", capacity: 387, registered: 121, format: "in-person", free: false},
  {id: 7, name: "Career Fair", capacity: 364, registered: 159, format: "in-person", free: true},
  {id: 8, name: "Demo Day", capacity: 117, registered: 275, format: "online", free: false}
];

test("with 143, 243", () => {
  expect(eventsInRange(EVENTS, 143, 243)).toEqual(["Game Night","Startup Night","JS Meetup","Workshop"]);
});

test("with 243, 274", () => {
  expect(eventsInRange(EVENTS, 243, 274)).toEqual(["Design Jam","Game Night"]);
});

test("with 143, 143", () => {
  expect(eventsInRange(EVENTS, 143, 143)).toEqual(["Startup Night","JS Meetup"]);
});
