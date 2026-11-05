const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 283, registered: 270, format: "hybrid", free: false},
  {id: 2, name: "Workshop", capacity: 251, registered: 359, format: "hybrid", free: false},
  {id: 3, name: "Career Fair", capacity: 27, registered: 62, format: "in-person", free: true},
  {id: 4, name: "Book Club", capacity: 308, registered: 373, format: "online", free: true},
  {id: 5, name: "Design Jam", capacity: 86, registered: 143, format: "online", free: true},
  {id: 6, name: "Demo Day", capacity: 102, registered: 196, format: "online", free: true},
  {id: 7, name: "Startup Night", capacity: 29, registered: 158, format: "online", free: true},
  {id: 8, name: "JS Meetup", capacity: 108, registered: 69, format: "hybrid", free: true}
];

test("an empty list", () => {
  expect(summariseEvents([])).toEqual([]);
});

test("all events", () => {
  expect(summariseEvents(EVENTS)).toEqual([{"id":1,"name":"Hackathon","capacity":283},{"id":2,"name":"Workshop","capacity":251},{"id":3,"name":"Career Fair","capacity":27},{"id":4,"name":"Book Club","capacity":308},{"id":5,"name":"Design Jam","capacity":86},{"id":6,"name":"Demo Day","capacity":102},{"id":7,"name":"Startup Night","capacity":29},{"id":8,"name":"JS Meetup","capacity":108}]);
});
