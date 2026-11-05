const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 74, calories: 491, kind: "mobility"},
  {id: 2, label: "Mon run", minutes: 58, calories: 80, kind: "mobility"},
  {id: 3, label: "Tue run", minutes: 90, calories: 601, kind: "cardio"},
  {id: 4, label: "Fri yoga", minutes: 15, calories: 500, kind: "mobility"},
  {id: 5, label: "Thu ride", minutes: 67, calories: 785, kind: "mobility"},
  {id: 6, label: "Wed lift", minutes: 21, calories: 360, kind: "strength"},
  {id: 7, label: "Fri run", minutes: 116, calories: 188, kind: "cardio"},
  {id: 8, label: "Wed swim", minutes: 106, calories: 783, kind: "mobility"}
];

test("an empty list", () => {
  expect(lowestMinutes([])).toEqual(null);
});

test("all workouts", () => {
  expect(lowestMinutes(WORKOUTS)).toEqual("Fri yoga");
});
