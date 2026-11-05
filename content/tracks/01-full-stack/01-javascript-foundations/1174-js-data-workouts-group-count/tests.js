const WORKOUTS = [
  {id: 1, label: "Fri yoga", minutes: 100, calories: 146, kind: "mobility"},
  {id: 2, label: "Thu yoga", minutes: 57, calories: 567, kind: "strength"},
  {id: 3, label: "Mon lift", minutes: 50, calories: 88, kind: "cardio"},
  {id: 4, label: "Sat ride", minutes: 54, calories: 271, kind: "strength"},
  {id: 5, label: "Fri run", minutes: 107, calories: 666, kind: "strength"},
  {id: 6, label: "Wed lift", minutes: 73, calories: 893, kind: "cardio"},
  {id: 7, label: "Sun walk", minutes: 115, calories: 101, kind: "strength"},
  {id: 8, label: "Mon run", minutes: 98, calories: 680, kind: "cardio"}
];

test("an empty list", () => {
  expect(countWorkoutsPerKind([])).toEqual({});
});

test("all workouts", () => {
  expect(countWorkoutsPerKind(WORKOUTS)).toEqual({"mobility":1,"strength":4,"cardio":3});
});
