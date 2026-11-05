const WORKOUTS = [
  {id: 1, label: "Fri run", minutes: 85, calories: 708, kind: "mobility"},
  {id: 2, label: "Tue swim", minutes: 114, calories: 417, kind: "mobility"},
  {id: 3, label: "Sun walk", minutes: 119, calories: 574, kind: "cardio"},
  {id: 4, label: "Thu ride", minutes: 38, calories: 647, kind: "strength"},
  {id: 5, label: "Wed lift", minutes: 77, calories: 475, kind: "cardio"},
  {id: 6, label: "Mon run", minutes: 116, calories: 681, kind: "mobility"},
  {id: 7, label: "Fri yoga", minutes: 105, calories: 124, kind: "cardio"},
  {id: 8, label: "Tue run", minutes: 95, calories: 159, kind: "cardio"}
];

test("with \"cardio\"", () => {
  expect(countWorkoutsByKind(WORKOUTS, "cardio")).toEqual(4);
});

test("with \"strength\"", () => {
  expect(countWorkoutsByKind(WORKOUTS, "strength")).toEqual(1);
});

test("with \"mobility\"", () => {
  expect(countWorkoutsByKind(WORKOUTS, "mobility")).toEqual(3);
});

test("with \"nope\"", () => {
  expect(countWorkoutsByKind(WORKOUTS, "nope")).toEqual(0);
});
