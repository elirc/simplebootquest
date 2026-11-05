const WORKOUTS = [
  {id: 1, label: "Wed lift", minutes: 113, calories: 297, kind: "strength"},
  {id: 2, label: "Fri run", minutes: 88, calories: 707, kind: "strength"},
  {id: 3, label: "Wed swim", minutes: 85, calories: 721, kind: "mobility"},
  {id: 4, label: "Sun walk", minutes: 63, calories: 204, kind: "cardio"},
  {id: 5, label: "Thu yoga", minutes: 106, calories: 556, kind: "cardio"},
  {id: 6, label: "Tue run", minutes: 44, calories: 395, kind: "cardio"},
  {id: 7, label: "Fri yoga", minutes: 23, calories: 716, kind: "strength"},
  {id: 8, label: "Thu ride", minutes: 79, calories: 83, kind: "cardio"}
];

test("an empty list", () => {
  expect(lowestMinutes([])).toEqual(null);
});

test("all workouts", () => {
  expect(lowestMinutes(WORKOUTS)).toEqual("Fri yoga");
});
