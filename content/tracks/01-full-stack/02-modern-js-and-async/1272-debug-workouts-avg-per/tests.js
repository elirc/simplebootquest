const WORKOUTS = [
  {id: 1, label: "Fri yoga", minutes: 83, calories: 138, kind: "mobility"},
  {id: 2, label: "Tue swim", minutes: 91, calories: 889, kind: "strength"},
  {id: 3, label: "Mon lift", minutes: 105, calories: 286, kind: "mobility"},
  {id: 4, label: "Sat ride", minutes: 44, calories: 515, kind: "cardio"},
  {id: 5, label: "Thu yoga", minutes: 107, calories: 761, kind: "mobility"},
  {id: 6, label: "Mon run", minutes: 95, calories: 444, kind: "cardio"},
  {id: 7, label: "Fri run", minutes: 39, calories: 281, kind: "cardio"},
  {id: 8, label: "Wed lift", minutes: 100, calories: 823, kind: "mobility"}
];

test("an empty list", () => {
  expect(averageMinutesPerKind([])).toEqual({});
});

test("all workouts", () => {
  expect(averageMinutesPerKind(WORKOUTS)).toEqual({"mobility":99,"strength":91,"cardio":59});
});
