const EVENTS = [
  {id: 1, name: "Workshop", capacity: 365, registered: 197, format: "online", free: false},
  {id: 2, name: "Hackathon", capacity: 103, registered: 346, format: "in-person", free: true},
  {id: 3, name: "AI Panel", capacity: 25, registered: 301, format: "in-person", free: false},
  {id: 4, name: "Code Dojo", capacity: 273, registered: 314, format: "in-person", free: false},
  {id: 5, name: "Book Club", capacity: 294, registered: 24, format: "online", free: true},
  {id: 6, name: "Demo Day", capacity: 170, registered: 285, format: "in-person", free: true},
  {id: 7, name: "Startup Night", capacity: 346, registered: 203, format: "hybrid", free: false},
  {id: 8, name: "Career Fair", capacity: 378, registered: 134, format: "in-person", free: false}
];

test("with 95", () => {
  expect(registeredHistogram(EVENTS, 95)).toEqual({"0":1,"95":1,"190":2,"285":4});
});

test("with 190", () => {
  expect(registeredHistogram(EVENTS, 190)).toEqual({"0":2,"190":6});
});
