// mutant: condition negated: `===` became `!==`
const WORKOUTS = [
  {id: 1, label: "Thu yoga", minutes: 40, calories: 754, kind: "mobility"},
  {id: 2, label: "Mon lift", minutes: 27, calories: 584, kind: "strength"},
  {id: 3, label: "Fri run", minutes: 82, calories: 523, kind: "mobility"},
  {id: 4, label: "Sat ride", minutes: 18, calories: 290, kind: "mobility"},
  {id: 5, label: "Thu ride", minutes: 49, calories: 878, kind: "cardio"},
  {id: 6, label: "Wed lift", minutes: 103, calories: 83, kind: "cardio"},
  {id: 7, label: "Tue swim", minutes: 69, calories: 718, kind: "mobility"},
  {id: 8, label: "Wed swim", minutes: 42, calories: 289, kind: "strength"}
];

function workoutsInKindRanked(workouts, value) {
  return workouts
    .filter((x) => x.kind !== value)
    .sort((a, b) => b.minutes - a.minutes)
    .map((x) => x.label);
}
