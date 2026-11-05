// mutant: input is no longer trimmed
const WORKOUTS = [
  {id: 1, label: "Thu ride", minutes: 72, calories: 642, kind: "cardio"},
  {id: 2, label: "Mon run", minutes: 87, calories: 493, kind: "cardio"},
  {id: 3, label: "Fri run", minutes: 116, calories: 705, kind: "strength"},
  {id: 4, label: "Thu yoga", minutes: 102, calories: 720, kind: "cardio"},
  {id: 5, label: "Tue run", minutes: 46, calories: 402, kind: "mobility"},
  {id: 6, label: "Mon lift", minutes: 82, calories: 804, kind: "cardio"},
  {id: 7, label: "Sun walk", minutes: 72, calories: 602, kind: "strength"},
  {id: 8, label: "Wed lift", minutes: 60, calories: 788, kind: "mobility"}
];

function searchWorkouts(workouts, query) {
  const q = query.toLowerCase();
  return workouts.filter((x) => x.label.toLowerCase().includes(q)).map((x) => x.label);
}
