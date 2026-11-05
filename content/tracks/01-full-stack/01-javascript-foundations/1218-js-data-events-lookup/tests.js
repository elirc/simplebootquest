const EVENTS = [
  {id: 1, name: "Workshop", capacity: 121, registered: 164, format: "online", free: true},
  {id: 2, name: "Career Fair", capacity: 378, registered: 300, format: "online", free: true},
  {id: 3, name: "Book Club", capacity: 356, registered: 32, format: "online", free: false},
  {id: 4, name: "Code Dojo", capacity: 53, registered: 27, format: "in-person", free: false},
  {id: 5, name: "Game Night", capacity: 370, registered: 241, format: "in-person", free: true},
  {id: 6, name: "Hackathon", capacity: 182, registered: 1, format: "online", free: true},
  {id: 7, name: "JS Meetup", capacity: 159, registered: 2, format: "hybrid", free: false},
  {id: 8, name: "Design Jam", capacity: 337, registered: 168, format: "online", free: false}
];

test("with \"Hackathon\"", () => {
  expect(registeredOf(EVENTS, "Hackathon")).toEqual(1);
});

test("with \"Nope\"", () => {
  expect(registeredOf(EVENTS, "Nope")).toEqual(null);
});
