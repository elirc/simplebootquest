const WORKOUTS = [
  {id: 1, label: "Wed swim", minutes: 90, calories: 843, kind: "cardio"},
  {id: 2, label: "Fri yoga", minutes: 55, calories: 342, kind: "cardio"},
  {id: 3, label: "Wed lift", minutes: 78, calories: 353, kind: "cardio"},
  {id: 4, label: "Thu ride", minutes: 100, calories: 98, kind: "mobility"},
  {id: 5, label: "Fri run", minutes: 73, calories: 294, kind: "cardio"},
  {id: 6, label: "Thu yoga", minutes: 63, calories: 794, kind: "strength"},
  {id: 7, label: "Mon lift", minutes: 73, calories: 251, kind: "cardio"},
  {id: 8, label: "Sat ride", minutes: 33, calories: 724, kind: "mobility"}
];

test("an empty list", () => {
  expect(countWorkoutsPerKind([])).toEqual({});
});

test("all workouts", () => {
  expect(countWorkoutsPerKind(WORKOUTS)).toEqual({"cardio":5,"mobility":2,"strength":1});
});
