// mutant: sort direction reversed
const WORKOUTS = [
  {id: 1, label: "Sun walk", minutes: 85, calories: 707, kind: "strength"},
  {id: 2, label: "Fri yoga", minutes: 103, calories: 96, kind: "strength"},
  {id: 3, label: "Sat ride", minutes: 25, calories: 407, kind: "strength"},
  {id: 4, label: "Tue swim", minutes: 102, calories: 687, kind: "strength"},
  {id: 5, label: "Wed lift", minutes: 48, calories: 405, kind: "mobility"},
  {id: 6, label: "Tue run", minutes: 16, calories: 102, kind: "mobility"},
  {id: 7, label: "Wed swim", minutes: 82, calories: 668, kind: "strength"},
  {id: 8, label: "Mon lift", minutes: 96, calories: 201, kind: "cardio"}
];

function workoutsByMinutes(workouts) {
  return [...workouts].sort((a, b) => b.minutes - a.minutes).map((x) => x.label);
}
