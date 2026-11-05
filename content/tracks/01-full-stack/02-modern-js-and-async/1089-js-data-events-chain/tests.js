const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 379, registered: 101, format: "hybrid", free: true},
  {id: 2, name: "Open Mic", capacity: 309, registered: 36, format: "hybrid", free: false},
  {id: 3, name: "Design Jam", capacity: 44, registered: 347, format: "online", free: true},
  {id: 4, name: "Demo Day", capacity: 40, registered: 125, format: "online", free: false},
  {id: 5, name: "Startup Night", capacity: 89, registered: 4, format: "in-person", free: false},
  {id: 6, name: "Game Night", capacity: 143, registered: 175, format: "online", free: true},
  {id: 7, name: "AI Panel", capacity: 128, registered: 343, format: "hybrid", free: true},
  {id: 8, name: "Book Club", capacity: 263, registered: 308, format: "in-person", free: true}
];

test("with \"in-person\"", () => {
  expect(eventsInFormatRanked(EVENTS, "in-person")).toEqual(["Book Club","Startup Night"]);
});

test("with \"online\"", () => {
  expect(eventsInFormatRanked(EVENTS, "online")).toEqual(["Game Night","Design Jam","Demo Day"]);
});

test("with \"hybrid\"", () => {
  expect(eventsInFormatRanked(EVENTS, "hybrid")).toEqual(["Hackathon","Open Mic","AI Panel"]);
});
