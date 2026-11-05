// mutant: sort direction reversed
const EVENTS = [
  {id: 1, name: "Code Dojo", capacity: 105, registered: 254, format: "hybrid", free: true},
  {id: 2, name: "JS Meetup", capacity: 217, registered: 121, format: "hybrid", free: true},
  {id: 3, name: "Open Mic", capacity: 261, registered: 163, format: "in-person", free: false},
  {id: 4, name: "Game Night", capacity: 321, registered: 214, format: "online", free: true},
  {id: 5, name: "AI Panel", capacity: 272, registered: 57, format: "online", free: true},
  {id: 6, name: "Workshop", capacity: 152, registered: 302, format: "hybrid", free: false},
  {id: 7, name: "Startup Night", capacity: 218, registered: 315, format: "in-person", free: false},
  {id: 8, name: "Career Fair", capacity: 49, registered: 124, format: "hybrid", free: true}
];

function topEventsByCapacity(events, n) {
  return [...events].sort((a, b) => a.capacity - b.capacity).slice(0, n).map((x) => x.name);
}
