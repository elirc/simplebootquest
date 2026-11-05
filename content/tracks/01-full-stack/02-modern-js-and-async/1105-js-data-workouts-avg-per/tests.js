const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 43, calories: 845, kind: "mobility"},
  {id: 2, label: "Thu ride", minutes: 93, calories: 634, kind: "strength"},
  {id: 3, label: "Sun walk", minutes: 103, calories: 799, kind: "mobility"},
  {id: 4, label: "Wed swim", minutes: 16, calories: 764, kind: "strength"},
  {id: 5, label: "Mon run", minutes: 95, calories: 182, kind: "cardio"},
  {id: 6, label: "Fri yoga", minutes: 61, calories: 844, kind: "strength"},
  {id: 7, label: "Wed lift", minutes: 64, calories: 762, kind: "mobility"},
  {id: 8, label: "Tue run", minutes: 53, calories: 675, kind: "cardio"}
];

test("an empty list", () => {
  expect(averageCaloriesPerKind([])).toEqual({});
});

test("all workouts", () => {
  expect(averageCaloriesPerKind(WORKOUTS)).toEqual({"mobility":802,"strength":747,"cardio":429});
});
