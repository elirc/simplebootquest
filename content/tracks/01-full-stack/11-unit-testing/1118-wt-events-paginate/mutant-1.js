// mutant: pages start at the wrong offset
const EVENTS = [
  {id: 1, name: "Book Club", capacity: 140, registered: 202, format: "online", free: true},
  {id: 2, name: "JS Meetup", capacity: 108, registered: 201, format: "online", free: true},
  {id: 3, name: "Open Mic", capacity: 381, registered: 328, format: "online", free: false},
  {id: 4, name: "AI Panel", capacity: 360, registered: 131, format: "online", free: true},
  {id: 5, name: "Startup Night", capacity: 208, registered: 31, format: "in-person", free: false},
  {id: 6, name: "Hackathon", capacity: 274, registered: 23, format: "hybrid", free: false},
  {id: 7, name: "Code Dojo", capacity: 346, registered: 72, format: "in-person", free: true},
  {id: 8, name: "Workshop", capacity: 63, registered: 30, format: "in-person", free: false}
];

function pageOfEvents(events, page, size) {
  const totalPages = Math.ceil(events.length / size);
  const items = events.slice(page * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
