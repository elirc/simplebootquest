// mutant: boundary: `>=` became `>`
const EVENTS = [
  {id: 1, name: "Code Dojo", capacity: 210, registered: 167, format: "in-person", free: true},
  {id: 2, name: "Game Night", capacity: 249, registered: 197, format: "online", free: false},
  {id: 3, name: "Career Fair", capacity: 283, registered: 76, format: "online", free: true},
  {id: 4, name: "Workshop", capacity: 317, registered: 372, format: "in-person", free: true},
  {id: 5, name: "AI Panel", capacity: 332, registered: 65, format: "online", free: true},
  {id: 6, name: "Demo Day", capacity: 277, registered: 318, format: "hybrid", free: true},
  {id: 7, name: "JS Meetup", capacity: 305, registered: 28, format: "online", free: true},
  {id: 8, name: "Hackathon", capacity: 203, registered: 6, format: "hybrid", free: false}
];

function nthByRegistered(events, n) {
  const sorted = [...events].sort((a, b) => b.registered - a.registered);
  return n > 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
