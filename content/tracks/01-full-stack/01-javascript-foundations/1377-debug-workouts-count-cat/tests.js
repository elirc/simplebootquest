const WORKOUTS = [
  {id: 1, label: "Fri yoga", minutes: 114, calories: 221, kind: "cardio"},
  {id: 2, label: "Sat ride", minutes: 29, calories: 538, kind: "mobility"},
  {id: 3, label: "Mon run", minutes: 82, calories: 845, kind: "cardio"},
  {id: 4, label: "Tue swim", minutes: 58, calories: 865, kind: "cardio"},
  {id: 5, label: "Wed swim", minutes: 71, calories: 883, kind: "mobility"},
  {id: 6, label: "Thu ride", minutes: 92, calories: 136, kind: "cardio"},
  {id: 7, label: "Tue run", minutes: 70, calories: 498, kind: "cardio"},
  {id: 8, label: "Thu yoga", minutes: 53, calories: 284, kind: "strength"}
];

test("with \"cardio\"", () => {
  expect(countWorkoutsByKind(WORKOUTS, "cardio")).toEqual(5);
});

test("with \"strength\"", () => {
  expect(countWorkoutsByKind(WORKOUTS, "strength")).toEqual(1);
});

test("with \"mobility\"", () => {
  expect(countWorkoutsByKind(WORKOUTS, "mobility")).toEqual(2);
});

test("with \"nope\"", () => {
  expect(countWorkoutsByKind(WORKOUTS, "nope")).toEqual(0);
});
