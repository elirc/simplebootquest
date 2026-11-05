const EVENTS = [
  {id: 1, name: "Book Club", capacity: 273, registered: 68, format: "hybrid", free: false},
  {id: 2, name: "Startup Night", capacity: 263, registered: 115, format: "online", free: false},
  {id: 3, name: "JS Meetup", capacity: 172, registered: 373, format: "hybrid", free: true},
  {id: 4, name: "AI Panel", capacity: 108, registered: 203, format: "hybrid", free: false},
  {id: 5, name: "Open Mic", capacity: 72, registered: 288, format: "online", free: false},
  {id: 6, name: "Workshop", capacity: 155, registered: 363, format: "in-person", free: false},
  {id: 7, name: "Code Dojo", capacity: 97, registered: 264, format: "hybrid", free: true},
  {id: 8, name: "Hackathon", capacity: 257, registered: 64, format: "online", free: false}
];

function percentFree(events) {
  if (events.length === 0) return 0;
  return Math.round((events.filter((x) => x.free).length / events.length) * 100);
}
