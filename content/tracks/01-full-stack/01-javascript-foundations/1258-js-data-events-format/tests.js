const EVENTS = [
  {id: 1, name: "Startup Night", capacity: 206, registered: 317, format: "in-person", free: false},
  {id: 2, name: "Book Club", capacity: 34, registered: 338, format: "in-person", free: false},
  {id: 3, name: "Workshop", capacity: 58, registered: 108, format: "online", free: false},
  {id: 4, name: "Design Jam", capacity: 324, registered: 63, format: "in-person", free: false},
  {id: 5, name: "Open Mic", capacity: 43, registered: 164, format: "in-person", free: false},
  {id: 6, name: "Code Dojo", capacity: 86, registered: 363, format: "online", free: false},
  {id: 7, name: "Career Fair", capacity: 91, registered: 298, format: "hybrid", free: true},
  {id: 8, name: "Game Night", capacity: 341, registered: 49, format: "hybrid", free: false}
];

test("an empty list", () => {
  expect(describeEvents([])).toEqual([]);
});

test("all events", () => {
  expect(describeEvents(EVENTS)).toEqual(["Startup Night (317)","Book Club (338)","Workshop (108)","Design Jam (63)","Open Mic (164)","Code Dojo (363)","Career Fair (298)","Game Night (49)"]);
});
