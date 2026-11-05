// mutant: sort direction reversed
const EVENTS = [
  {id: 1, name: "Book Club", capacity: 280, registered: 290, format: "in-person", free: false},
  {id: 2, name: "Hackathon", capacity: 191, registered: 351, format: "hybrid", free: true},
  {id: 3, name: "Career Fair", capacity: 85, registered: 234, format: "online", free: false},
  {id: 4, name: "AI Panel", capacity: 336, registered: 172, format: "in-person", free: false},
  {id: 5, name: "Workshop", capacity: 385, registered: 313, format: "online", free: false},
  {id: 6, name: "Code Dojo", capacity: 257, registered: 76, format: "in-person", free: true},
  {id: 7, name: "Game Night", capacity: 200, registered: 122, format: "hybrid", free: true},
  {id: 8, name: "Open Mic", capacity: 132, registered: 94, format: "in-person", free: false}
];

function eventsByRegistered(events) {
  return [...events].sort((a, b) => b.registered - a.registered).map((x) => x.name);
}
