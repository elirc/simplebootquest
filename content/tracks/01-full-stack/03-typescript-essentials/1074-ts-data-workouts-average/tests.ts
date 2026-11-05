const WORKOUTS = [
  {id: 1, label: "Sat ride", minutes: 15, calories: 518, kind: "strength"},
  {id: 2, label: "Tue run", minutes: 27, calories: 280, kind: "mobility"},
  {id: 3, label: "Thu ride", minutes: 88, calories: 249, kind: "mobility"},
  {id: 4, label: "Wed lift", minutes: 18, calories: 715, kind: "cardio"},
  {id: 5, label: "Sun walk", minutes: 19, calories: 897, kind: "cardio"},
  {id: 6, label: "Fri run", minutes: 110, calories: 733, kind: "mobility"},
  {id: 7, label: "Fri yoga", minutes: 87, calories: 632, kind: "cardio"},
  {id: 8, label: "Wed swim", minutes: 85, calories: 361, kind: "strength"}
];

test("an empty list", () => {
  expect(averageCalories([])).toEqual(null);
});

test("all workouts", () => {
  expect(averageCalories(WORKOUTS)).toEqual(548.1);
});
