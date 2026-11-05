const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 114, calories: 313, kind: "strength"},
  {id: 2, label: "Wed lift", minutes: 100, calories: 435, kind: "strength"},
  {id: 3, label: "Thu ride", minutes: 71, calories: 736, kind: "cardio"},
  {id: 4, label: "Fri yoga", minutes: 114, calories: 263, kind: "mobility"},
  {id: 5, label: "Tue run", minutes: 51, calories: 881, kind: "strength"},
  {id: 6, label: "Mon run", minutes: 97, calories: 427, kind: "strength"},
  {id: 7, label: "Mon lift", minutes: 19, calories: 751, kind: "strength"},
  {id: 8, label: "Fri run", minutes: 25, calories: 565, kind: "mobility"}
];

test("an empty list", () => {
  expect(totalMinutes([])).toEqual(0);
});

test("all workouts", () => {
  expect(totalMinutes(WORKOUTS)).toEqual(591);
});
