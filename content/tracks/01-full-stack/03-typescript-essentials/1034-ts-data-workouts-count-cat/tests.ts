const WORKOUTS = [
  {id: 1, label: "Fri yoga", minutes: 51, calories: 498, kind: "mobility"},
  {id: 2, label: "Tue run", minutes: 103, calories: 146, kind: "strength"},
  {id: 3, label: "Wed swim", minutes: 47, calories: 518, kind: "cardio"},
  {id: 4, label: "Thu yoga", minutes: 104, calories: 194, kind: "cardio"},
  {id: 5, label: "Sun walk", minutes: 50, calories: 286, kind: "mobility"},
  {id: 6, label: "Sat ride", minutes: 18, calories: 498, kind: "strength"},
  {id: 7, label: "Fri run", minutes: 29, calories: 567, kind: "strength"},
  {id: 8, label: "Tue swim", minutes: 32, calories: 384, kind: "strength"}
];

test("with \"cardio\"", () => {
  expect(countWorkoutsByKind(WORKOUTS, "cardio")).toEqual(2);
});

test("with \"strength\"", () => {
  expect(countWorkoutsByKind(WORKOUTS, "strength")).toEqual(4);
});

test("with \"mobility\"", () => {
  expect(countWorkoutsByKind(WORKOUTS, "mobility")).toEqual(2);
});

test("with \"nope\"", () => {
  expect(countWorkoutsByKind(WORKOUTS, "nope")).toEqual(0);
});
