// mutant: condition negated: `===` became `!==`
const WORKOUTS = [
  {id: 1, label: "Mon run", minutes: 86, calories: 382, kind: "cardio"},
  {id: 2, label: "Wed lift", minutes: 87, calories: 644, kind: "strength"},
  {id: 3, label: "Mon lift", minutes: 111, calories: 672, kind: "mobility"},
  {id: 4, label: "Thu yoga", minutes: 58, calories: 343, kind: "cardio"},
  {id: 5, label: "Tue swim", minutes: 69, calories: 623, kind: "mobility"},
  {id: 6, label: "Thu ride", minutes: 89, calories: 588, kind: "strength"},
  {id: 7, label: "Fri yoga", minutes: 15, calories: 684, kind: "strength"},
  {id: 8, label: "Wed swim", minutes: 44, calories: 573, kind: "mobility"}
];

function averageCalories(workouts) {
  if (workouts.length !== 0) return null;
  const total = workouts.reduce((sum, x) => sum + x.calories, 0);
  return Math.round((total / workouts.length) * 10) / 10;
}
