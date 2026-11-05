const EVENTS = [
  {id: 1, name: "Startup Night", capacity: 44, registered: 301, format: "hybrid", free: true},
  {id: 2, name: "Design Jam", capacity: 363, registered: 363, format: "hybrid", free: true},
  {id: 3, name: "JS Meetup", capacity: 352, registered: 275, format: "in-person", free: true},
  {id: 4, name: "Open Mic", capacity: 78, registered: 307, format: "hybrid", free: true},
  {id: 5, name: "Code Dojo", capacity: 175, registered: 168, format: "online", free: false},
  {id: 6, name: "Book Club", capacity: 333, registered: 145, format: "online", free: false},
  {id: 7, name: "Career Fair", capacity: 195, registered: 87, format: "hybrid", free: false},
  {id: 8, name: "AI Panel", capacity: 81, registered: 248, format: "hybrid", free: false}
];

test("an empty list", () => {
  expect(splitEventsByFree([])).toEqual({"yes":[],"no":[]});
});

test("all events", () => {
  expect(splitEventsByFree(EVENTS)).toEqual({"yes":["Startup Night","Design Jam","JS Meetup","Open Mic"],"no":["Code Dojo","Book Club","Career Fair","AI Panel"]});
});
