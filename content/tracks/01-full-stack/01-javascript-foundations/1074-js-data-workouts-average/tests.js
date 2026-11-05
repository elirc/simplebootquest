const WORKOUTS = [
  {id: 1, label: "Fri run", minutes: 50, calories: 320, kind: "mobility"},
  {id: 2, label: "Tue swim", minutes: 22, calories: 185, kind: "mobility"},
  {id: 3, label: "Fri yoga", minutes: 18, calories: 534, kind: "strength"},
  {id: 4, label: "Wed lift", minutes: 115, calories: 834, kind: "mobility"},
  {id: 5, label: "Sat ride", minutes: 27, calories: 842, kind: "strength"},
  {id: 6, label: "Sun walk", minutes: 64, calories: 850, kind: "cardio"},
  {id: 7, label: "Mon run", minutes: 109, calories: 562, kind: "strength"},
  {id: 8, label: "Tue run", minutes: 50, calories: 323, kind: "mobility"}
];

test("an empty list", () => {
  expect(averageCalories([])).toEqual(null);
});

test("all workouts", () => {
  expect(averageCalories(WORKOUTS)).toEqual(556.3);
});
