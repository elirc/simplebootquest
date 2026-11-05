// mutant: sort direction reversed
const WORKOUTS = [
  {id: 1, label: "Thu yoga", minutes: 50, calories: 742, kind: "cardio"},
  {id: 2, label: "Thu ride", minutes: 51, calories: 447, kind: "mobility"},
  {id: 3, label: "Sat ride", minutes: 24, calories: 177, kind: "strength"},
  {id: 4, label: "Mon run", minutes: 37, calories: 312, kind: "cardio"},
  {id: 5, label: "Wed swim", minutes: 72, calories: 571, kind: "strength"},
  {id: 6, label: "Fri run", minutes: 83, calories: 795, kind: "mobility"},
  {id: 7, label: "Tue run", minutes: 87, calories: 625, kind: "cardio"},
  {id: 8, label: "Tue swim", minutes: 94, calories: 418, kind: "cardio"}
];

function topWorkoutsByCalories(workouts, n) {
  return [...workouts].sort((a, b) => a.calories - b.calories).slice(0, n).map((x) => x.label);
}
