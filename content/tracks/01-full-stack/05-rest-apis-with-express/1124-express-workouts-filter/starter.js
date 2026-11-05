const app = express();
app.use(express.json());

const workouts = [
  {id: 1, label: "Tue swim", minutes: 41, calories: 601, kind: "strength"},
  {id: 2, label: "Mon run", minutes: 60, calories: 283, kind: "strength"},
  {id: 3, label: "Thu yoga", minutes: 69, calories: 547, kind: "mobility"},
  {id: 4, label: "Tue run", minutes: 21, calories: 564, kind: "mobility"},
  {id: 5, label: "Wed lift", minutes: 111, calories: 527, kind: "mobility"},
  {id: 6, label: "Sun walk", minutes: 50, calories: 520, kind: "cardio"},
  {id: 7, label: "Sat ride", minutes: 80, calories: 291, kind: "cardio"},
  {id: 8, label: "Thu ride", minutes: 58, calories: 821, kind: "strength"}
];

// TODO: filter workouts with a query parameter
