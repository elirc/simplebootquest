const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 23, calories: 542, kind: "strength"},
  {id: 2, label: "Sun walk", minutes: 98, calories: 383, kind: "strength"},
  {id: 3, label: "Tue run", minutes: 28, calories: 595, kind: "mobility"},
  {id: 4, label: "Mon lift", minutes: 113, calories: 752, kind: "cardio"},
  {id: 5, label: "Wed swim", minutes: 75, calories: 873, kind: "cardio"},
  {id: 6, label: "Mon run", minutes: 75, calories: 850, kind: "cardio"},
  {id: 7, label: "Fri yoga", minutes: 105, calories: 405, kind: "mobility"},
  {id: 8, label: "Sat ride", minutes: 36, calories: 890, kind: "cardio"}
];

test("an empty list", () => {
  expect(totalCalories([])).toEqual(0);
});

test("all workouts", () => {
  expect(totalCalories(WORKOUTS)).toEqual(5290);
});
