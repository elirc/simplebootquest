const app = express();
app.use(express.json());

const events = [
  {id: 1, name: "AI Panel", capacity: 186, registered: 190, format: "in-person", free: false},
  {id: 2, name: "Demo Day", capacity: 295, registered: 225, format: "in-person", free: true},
  {id: 3, name: "Workshop", capacity: 156, registered: 26, format: "online", free: false},
  {id: 4, name: "Code Dojo", capacity: 317, registered: 134, format: "in-person", free: false},
  {id: 5, name: "Hackathon", capacity: 86, registered: 112, format: "online", free: true},
  {id: 6, name: "Book Club", capacity: 330, registered: 212, format: "in-person", free: true},
  {id: 7, name: "Design Jam", capacity: 150, registered: 272, format: "in-person", free: true},
  {id: 8, name: "Startup Night", capacity: 23, registered: 165, format: "in-person", free: false}
];

// TODO: a stats endpoint
