// mutant: sort direction reversed
const WORKOUTS = [
  {id: 1, label: "Sun walk", minutes: 75, calories: 492, kind: "strength"},
  {id: 2, label: "Thu ride", minutes: 94, calories: 94, kind: "mobility"},
  {id: 3, label: "Mon lift", minutes: 120, calories: 106, kind: "strength"},
  {id: 4, label: "Tue run", minutes: 34, calories: 162, kind: "strength"},
  {id: 5, label: "Mon run", minutes: 100, calories: 606, kind: "strength"},
  {id: 6, label: "Wed lift", minutes: 23, calories: 485, kind: "strength"},
  {id: 7, label: "Thu yoga", minutes: 59, calories: 521, kind: "strength"},
  {id: 8, label: "Fri yoga", minutes: 39, calories: 653, kind: "mobility"}
];

function nthByMinutes(workouts, n) {
  const sorted = [...workouts].sort((a, b) => a.minutes - b.minutes);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].label : null;
}
