const EVENTS = [
  {id: 1, name: "Open Mic", capacity: 229, registered: 73, format: "online", free: false},
  {id: 2, name: "Demo Day", capacity: 77, registered: 314, format: "in-person", free: false},
  {id: 3, name: "Code Dojo", capacity: 341, registered: 276, format: "hybrid", free: false},
  {id: 4, name: "Book Club", capacity: 85, registered: 190, format: "online", free: true},
  {id: 5, name: "Career Fair", capacity: 347, registered: 131, format: "online", free: false},
  {id: 6, name: "JS Meetup", capacity: 34, registered: 130, format: "hybrid", free: true},
  {id: 7, name: "Workshop", capacity: 251, registered: 345, format: "online", free: false},
  {id: 8, name: "Game Night", capacity: 209, registered: 89, format: "hybrid", free: true}
];

test("with \"in-person\"", () => {
  expect(countEventsByFormat(EVENTS, "in-person")).toEqual(1);
});

test("with \"online\"", () => {
  expect(countEventsByFormat(EVENTS, "online")).toEqual(4);
});

test("with \"hybrid\"", () => {
  expect(countEventsByFormat(EVENTS, "hybrid")).toEqual(3);
});

test("with \"nope\"", () => {
  expect(countEventsByFormat(EVENTS, "nope")).toEqual(0);
});
