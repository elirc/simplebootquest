const EVENTS = [
  {id: 1, name: "Workshop", capacity: 64, registered: 337, format: "online", free: true},
  {id: 2, name: "AI Panel", capacity: 197, registered: 290, format: "online", free: true},
  {id: 3, name: "Demo Day", capacity: 125, registered: 156, format: "hybrid", free: false},
  {id: 4, name: "JS Meetup", capacity: 57, registered: 4, format: "online", free: false},
  {id: 5, name: "Design Jam", capacity: 221, registered: 145, format: "in-person", free: false},
  {id: 6, name: "Book Club", capacity: 343, registered: 266, format: "in-person", free: true},
  {id: 7, name: "Hackathon", capacity: 242, registered: 112, format: "online", free: true},
  {id: 8, name: "Startup Night", capacity: 383, registered: 242, format: "online", free: true}
];

test("an empty list", () => {
  expect(summariseEvents([])).toEqual([]);
});

test("all events", () => {
  expect(summariseEvents(EVENTS)).toEqual([{"id":1,"name":"Workshop","capacity":64},{"id":2,"name":"AI Panel","capacity":197},{"id":3,"name":"Demo Day","capacity":125},{"id":4,"name":"JS Meetup","capacity":57},{"id":5,"name":"Design Jam","capacity":221},{"id":6,"name":"Book Club","capacity":343},{"id":7,"name":"Hackathon","capacity":242},{"id":8,"name":"Startup Night","capacity":383}]);
});
