const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 26, calories: 798, kind: "strength"},
  {id: 2, label: "Wed swim", minutes: 46, calories: 409, kind: "cardio"},
  {id: 3, label: "Fri run", minutes: 20, calories: 759, kind: "mobility"},
  {id: 4, label: "Tue run", minutes: 70, calories: 574, kind: "strength"},
  {id: 5, label: "Thu yoga", minutes: 97, calories: 216, kind: "cardio"},
  {id: 6, label: "Wed lift", minutes: 86, calories: 399, kind: "cardio"},
  {id: 7, label: "Sat ride", minutes: 54, calories: 757, kind: "mobility"},
  {id: 8, label: "Fri yoga", minutes: 49, calories: 351, kind: "cardio"}
];

test("an empty list", () => {
  expect(averageCalories([])).toEqual(null);
});

test("all workouts", () => {
  expect(averageCalories(WORKOUTS)).toEqual(532.9);
});
