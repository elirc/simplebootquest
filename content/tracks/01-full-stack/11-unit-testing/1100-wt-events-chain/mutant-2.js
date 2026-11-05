// mutant: sort direction reversed
const EVENTS = [
  {id: 1, name: "Workshop", capacity: 212, registered: 224, format: "in-person", free: true},
  {id: 2, name: "Game Night", capacity: 186, registered: 127, format: "in-person", free: false},
  {id: 3, name: "Code Dojo", capacity: 375, registered: 103, format: "hybrid", free: true},
  {id: 4, name: "AI Panel", capacity: 183, registered: 323, format: "hybrid", free: false},
  {id: 5, name: "JS Meetup", capacity: 91, registered: 144, format: "hybrid", free: true},
  {id: 6, name: "Career Fair", capacity: 273, registered: 62, format: "in-person", free: true},
  {id: 7, name: "Demo Day", capacity: 168, registered: 123, format: "online", free: true},
  {id: 8, name: "Open Mic", capacity: 25, registered: 16, format: "online", free: false}
];

function eventsInFormatRanked(events, value) {
  return events
    .filter((x) => x.format === value)
    .sort((a, b) => a.registered - b.registered)
    .map((x) => x.name);
}
