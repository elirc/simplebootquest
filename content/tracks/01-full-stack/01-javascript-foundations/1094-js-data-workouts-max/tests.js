const WORKOUTS = [
  {id: 1, label: "Fri run", minutes: 97, calories: 767, kind: "strength"},
  {id: 2, label: "Sun walk", minutes: 46, calories: 221, kind: "cardio"},
  {id: 3, label: "Sat ride", minutes: 23, calories: 158, kind: "cardio"},
  {id: 4, label: "Thu ride", minutes: 102, calories: 788, kind: "cardio"},
  {id: 5, label: "Mon run", minutes: 81, calories: 661, kind: "mobility"},
  {id: 6, label: "Thu yoga", minutes: 36, calories: 347, kind: "cardio"},
  {id: 7, label: "Mon lift", minutes: 83, calories: 113, kind: "strength"},
  {id: 8, label: "Wed swim", minutes: 62, calories: 834, kind: "strength"}
];

test("an empty list", () => {
  expect(highestCalories([])).toEqual(null);
});

test("all workouts", () => {
  expect(highestCalories(WORKOUTS)).toEqual("Wed swim");
});
