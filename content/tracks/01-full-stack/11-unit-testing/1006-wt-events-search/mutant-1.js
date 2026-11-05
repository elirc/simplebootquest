// mutant: search became case-sensitive
const EVENTS = [
  {id: 1, name: "Career Fair", capacity: 215, registered: 98, format: "in-person", free: true},
  {id: 2, name: "Game Night", capacity: 392, registered: 373, format: "online", free: false},
  {id: 3, name: "Code Dojo", capacity: 332, registered: 351, format: "in-person", free: false},
  {id: 4, name: "Hackathon", capacity: 397, registered: 96, format: "online", free: true},
  {id: 5, name: "JS Meetup", capacity: 192, registered: 192, format: "hybrid", free: true},
  {id: 6, name: "Design Jam", capacity: 307, registered: 3, format: "online", free: true},
  {id: 7, name: "Book Club", capacity: 134, registered: 204, format: "in-person", free: false},
  {id: 8, name: "AI Panel", capacity: 87, registered: 56, format: "in-person", free: true}
];

function searchEvents(events, query) {
  const q = query.trim();
  return events.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
