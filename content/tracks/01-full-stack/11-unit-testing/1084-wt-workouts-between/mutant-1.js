// mutant: boundary: `>=` became `>`
const WORKOUTS = [
  {id: 1, label: "Mon run", minutes: 70, calories: 654, kind: "strength"},
  {id: 2, label: "Sun walk", minutes: 64, calories: 280, kind: "mobility"},
  {id: 3, label: "Fri yoga", minutes: 85, calories: 122, kind: "mobility"},
  {id: 4, label: "Fri run", minutes: 48, calories: 467, kind: "cardio"},
  {id: 5, label: "Wed lift", minutes: 27, calories: 565, kind: "cardio"},
  {id: 6, label: "Tue run", minutes: 94, calories: 861, kind: "strength"},
  {id: 7, label: "Thu yoga", minutes: 52, calories: 883, kind: "mobility"},
  {id: 8, label: "Mon lift", minutes: 109, calories: 159, kind: "cardio"}
];

function workoutsInRange(workouts, low, high) {
  return workouts.filter((x) => x.minutes > low && x.minutes <= high).map((x) => x.label);
}
