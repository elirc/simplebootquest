const BEFORE = [
  {id: 1, name: "Demo Day", capacity: 144, registered: 311, format: "in-person", free: false},
  {id: 2, name: "Code Dojo", capacity: 287, registered: 230, format: "hybrid", free: false},
  {id: 3, name: "Design Jam", capacity: 46, registered: 261, format: "hybrid", free: true},
  {id: 4, name: "JS Meetup", capacity: 359, registered: 44, format: "in-person", free: false},
  {id: 5, name: "AI Panel", capacity: 187, registered: 217, format: "in-person", free: true},
  {id: 6, name: "Career Fair", capacity: 141, registered: 24, format: "in-person", free: true},
  {id: 7, name: "Book Club", capacity: 176, registered: 264, format: "hybrid", free: true},
  {id: 8, name: "Startup Night", capacity: 91, registered: 205, format: "in-person", free: false}
];
const AFTER = [
  {id: 1, name: "Demo Day", capacity: 144, registered: 311, format: "in-person", free: false},
  {id: 2, name: "Code Dojo", capacity: 294, registered: 230, format: "hybrid", free: false},
  {id: 3, name: "Design Jam", capacity: 46, registered: 261, format: "hybrid", free: true},
  {id: 4, name: "JS Meetup", capacity: 359, registered: 44, format: "in-person", free: false},
  {id: 5, name: "AI Panel", capacity: 194, registered: 217, format: "in-person", free: true},
  {id: 6, name: "Career Fair", capacity: 141, registered: 24, format: "in-person", free: true},
  {id: 7, name: "Book Club", capacity: 176, registered: 264, format: "hybrid", free: true},
  {id: 8, name: "Startup Night", capacity: 98, registered: 205, format: "in-person", free: false}
];

test("finds changed ids", () => {
  expect(capacityChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(capacityChanges(BEFORE, BEFORE)).toEqual([]);
});
