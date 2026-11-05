const EVENTS = [
  {id: 1, name: "AI Panel", capacity: 252, registered: 352, format: "in-person", free: true},
  {id: 2, name: "Design Jam", capacity: 310, registered: 199, format: "hybrid", free: false},
  {id: 3, name: "Demo Day", capacity: 230, registered: 362, format: "online", free: true},
  {id: 4, name: "Workshop", capacity: 99, registered: 185, format: "hybrid", free: false},
  {id: 5, name: "Startup Night", capacity: 33, registered: 279, format: "hybrid", free: true},
  {id: 6, name: "Book Club", capacity: 143, registered: 40, format: "online", free: true},
  {id: 7, name: "Game Night", capacity: 381, registered: 186, format: "in-person", free: false},
  {id: 8, name: "JS Meetup", capacity: 292, registered: 121, format: "in-person", free: true}
];

function eventsInRange(events, low, high) {
  return events.filter((x) => x.capacity >= low && x.capacity <= high).map((x) => x.name);
}
