const EVENTS = [
  {id: 1, name: "Code Dojo", capacity: 201, registered: 30, format: "online", free: false},
  {id: 2, name: "Demo Day", capacity: 101, registered: 132, format: "online", free: true},
  {id: 3, name: "Game Night", capacity: 62, registered: 144, format: "in-person", free: false},
  {id: 4, name: "Design Jam", capacity: 320, registered: 178, format: "online", free: false},
  {id: 5, name: "AI Panel", capacity: 24, registered: 377, format: "in-person", free: true},
  {id: 6, name: "Startup Night", capacity: 105, registered: 281, format: "hybrid", free: true},
  {id: 7, name: "Career Fair", capacity: 24, registered: 33, format: "hybrid", free: false},
  {id: 8, name: "Hackathon", capacity: 366, registered: 43, format: "in-person", free: false}
];

test("an empty list", () => {
  expect(eventsById([])).toEqual({});
});

test("all events", () => {
  expect(eventsById(EVENTS)).toEqual({"1":"Code Dojo","2":"Demo Day","3":"Game Night","4":"Design Jam","5":"AI Panel","6":"Startup Night","7":"Career Fair","8":"Hackathon"});
});
