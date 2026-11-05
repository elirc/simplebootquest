const WORKOUTS = [
  {id: 1, label: "Thu yoga", minutes: 109, calories: 678, kind: "mobility"},
  {id: 2, label: "Sun walk", minutes: 66, calories: 700, kind: "strength"},
  {id: 3, label: "Sat ride", minutes: 72, calories: 204, kind: "strength"},
  {id: 4, label: "Thu ride", minutes: 54, calories: 804, kind: "strength"},
  {id: 5, label: "Wed lift", minutes: 20, calories: 850, kind: "strength"},
  {id: 6, label: "Tue run", minutes: 68, calories: 683, kind: "mobility"},
  {id: 7, label: "Wed swim", minutes: 101, calories: 209, kind: "strength"},
  {id: 8, label: "Mon run", minutes: 70, calories: 243, kind: "mobility"}
];

test("an empty list", () => {
  expect(highestCalories([])).toEqual(null);
});

test("all workouts", () => {
  expect(highestCalories(WORKOUTS)).toEqual("Wed lift");
});
