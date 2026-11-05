const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 161, registered: 122, format: "online", free: false},
  {id: 2, name: "Game Night", capacity: 286, registered: 143, format: "in-person", free: true},
  {id: 3, name: "AI Panel", capacity: 264, registered: 313, format: "hybrid", free: false},
  {id: 4, name: "Design Jam", capacity: 283, registered: 314, format: "in-person", free: true},
  {id: 5, name: "JS Meetup", capacity: 393, registered: 191, format: "online", free: false},
  {id: 6, name: "Career Fair", capacity: 388, registered: 169, format: "hybrid", free: true},
  {id: 7, name: "Code Dojo", capacity: 344, registered: 219, format: "in-person", free: true},
  {id: 8, name: "Open Mic", capacity: 217, registered: 34, format: "online", free: false}
];

test("with 143, 191", () => {
  expect(eventsInRange(EVENTS, 143, 191)).toEqual(["Game Night","JS Meetup","Career Fair"]);
});

test("with 191, 219", () => {
  expect(eventsInRange(EVENTS, 191, 219)).toEqual(["JS Meetup","Code Dojo"]);
});

test("with 143, 143", () => {
  expect(eventsInRange(EVENTS, 143, 143)).toEqual(["Game Night"]);
});
