// mutant: rounding: `Math.round` became `Math.floor`
const EVENTS = [
  {id: 1, name: "Code Dojo", capacity: 372, registered: 168, format: "in-person", free: false},
  {id: 2, name: "Startup Night", capacity: 262, registered: 55, format: "hybrid", free: true},
  {id: 3, name: "Demo Day", capacity: 390, registered: 108, format: "online", free: true},
  {id: 4, name: "AI Panel", capacity: 376, registered: 250, format: "online", free: false},
  {id: 5, name: "JS Meetup", capacity: 71, registered: 73, format: "online", free: true},
  {id: 6, name: "Book Club", capacity: 272, registered: 211, format: "in-person", free: true},
  {id: 7, name: "Design Jam", capacity: 148, registered: 372, format: "hybrid", free: true},
  {id: 8, name: "Open Mic", capacity: 167, registered: 304, format: "online", free: false}
];

function averageCapacity(events) {
  if (events.length === 0) return null;
  const total = events.reduce((sum, x) => sum + x.capacity, 0);
  return Math.floor((total / events.length) * 10) / 10;
}
