const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 378, registered: 59, format: "hybrid", free: true},
  {id: 2, name: "Book Club", capacity: 287, registered: 201, format: "in-person", free: false},
  {id: 3, name: "JS Meetup", capacity: 226, registered: 271, format: "hybrid", free: false},
  {id: 4, name: "Career Fair", capacity: 278, registered: 135, format: "hybrid", free: false},
  {id: 5, name: "Open Mic", capacity: 193, registered: 321, format: "hybrid", free: false},
  {id: 6, name: "Code Dojo", capacity: 209, registered: 359, format: "hybrid", free: true},
  {id: 7, name: "Startup Night", capacity: 162, registered: 195, format: "online", free: false},
  {id: 8, name: "Workshop", capacity: 110, registered: 375, format: "online", free: true}
];

test("with \"s \"", () => {
  expect(searchEvents(EVENTS, "s ")).toEqual(["JS Meetup","Startup Night","Workshop"]);
});

test("with \"S \"", () => {
  expect(searchEvents(EVENTS, "S ")).toEqual(["JS Meetup","Startup Night","Workshop"]);
});

test("with \"  \"", () => {
  expect(searchEvents(EVENTS, "  ")).toEqual(["Hackathon","Book Club","JS Meetup","Career Fair","Open Mic","Code Dojo","Startup Night","Workshop"]);
});

test("with \"zzz\"", () => {
  expect(searchEvents(EVENTS, "zzz")).toEqual([]);
});
