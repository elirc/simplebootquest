const WORKOUTS = [
  {id: 1, label: "Thu ride", minutes: 59, calories: 370, kind: "mobility"},
  {id: 2, label: "Wed swim", minutes: 115, calories: 318, kind: "mobility"},
  {id: 3, label: "Mon run", minutes: 76, calories: 623, kind: "cardio"},
  {id: 4, label: "Wed lift", minutes: 109, calories: 503, kind: "strength"},
  {id: 5, label: "Sat ride", minutes: 114, calories: 475, kind: "strength"},
  {id: 6, label: "Thu yoga", minutes: 80, calories: 318, kind: "cardio"},
  {id: 7, label: "Sun walk", minutes: 65, calories: 823, kind: "cardio"},
  {id: 8, label: "Fri yoga", minutes: 18, calories: 840, kind: "mobility"}
];

test("an empty list", () => {
  expect(lowestCalories([])).toEqual(null);
});

test("all workouts", () => {
  expect(lowestCalories(WORKOUTS)).toEqual("Wed swim");
});
