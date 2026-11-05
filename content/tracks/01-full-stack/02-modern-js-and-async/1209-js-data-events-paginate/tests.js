const EVENTS = [
  {id: 1, name: "Code Dojo", capacity: 237, registered: 27, format: "online", free: false},
  {id: 2, name: "Startup Night", capacity: 306, registered: 248, format: "hybrid", free: false},
  {id: 3, name: "Game Night", capacity: 300, registered: 198, format: "hybrid", free: false},
  {id: 4, name: "Workshop", capacity: 206, registered: 79, format: "in-person", free: true},
  {id: 5, name: "Career Fair", capacity: 79, registered: 260, format: "in-person", free: true},
  {id: 6, name: "Design Jam", capacity: 145, registered: 270, format: "in-person", free: false},
  {id: 7, name: "Open Mic", capacity: 338, registered: 112, format: "hybrid", free: true},
  {id: 8, name: "Hackathon", capacity: 338, registered: 112, format: "online", free: true}
];

test("with 1, 3", () => {
  expect(pageOfEvents(EVENTS, 1, 3)).toEqual({"items":["Code Dojo","Startup Night","Game Night"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfEvents(EVENTS, 2, 3)).toEqual({"items":["Workshop","Career Fair","Design Jam"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfEvents(EVENTS, 3, 3)).toEqual({"items":["Open Mic","Hackathon"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfEvents(EVENTS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
