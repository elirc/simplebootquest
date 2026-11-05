const app = express();
app.use(express.json());

const cities = [
  {id: 1, name: "Lagos", population: 3796, avgTemp: 22, continent: "Americas"},
  {id: 2, name: "Seoul", population: 1420, avgTemp: 14, continent: "Europe"},
  {id: 3, name: "Quito", population: 4867, avgTemp: 6, continent: "Americas"},
  {id: 4, name: "Lima", population: 2433, avgTemp: 3, continent: "Americas"},
  {id: 5, name: "Perth", population: 1895, avgTemp: 26, continent: "Oceania"},
  {id: 6, name: "Lisbon", population: 7803, avgTemp: 7, continent: "Asia"},
  {id: 7, name: "Oslo", population: 5480, avgTemp: 21, continent: "Africa"},
  {id: 8, name: "Hanoi", population: 1746, avgTemp: 14, continent: "Americas"}
];

// TODO: reject duplicates with 409
