const EVENTS = [
  {id: 1, name: "Book Club", capacity: 287, registered: 95, format: "hybrid", free: false},
  {id: 2, name: "Hackathon", capacity: 358, registered: 171, format: "hybrid", free: true},
  {id: 3, name: "Open Mic", capacity: 316, registered: 42, format: "online", free: false},
  {id: 4, name: "Career Fair", capacity: 158, registered: 148, format: "in-person", free: false},
  {id: 5, name: "Code Dojo", capacity: 21, registered: 3, format: "online", free: true},
  {id: 6, name: "AI Panel", capacity: 301, registered: 149, format: "in-person", free: false},
  {id: 7, name: "Design Jam", capacity: 259, registered: 51, format: "online", free: true},
  {id: 8, name: "Startup Night", capacity: 151, registered: 368, format: "in-person", free: false}
];

test("with \"in-person\"", () => {
  expect(countEventsByFormat(EVENTS, "in-person")).toEqual(3);
});

test("with \"online\"", () => {
  expect(countEventsByFormat(EVENTS, "online")).toEqual(3);
});

test("with \"hybrid\"", () => {
  expect(countEventsByFormat(EVENTS, "hybrid")).toEqual(2);
});

test("with \"nope\"", () => {
  expect(countEventsByFormat(EVENTS, "nope")).toEqual(0);
});
