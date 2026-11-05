const WORKOUTS = [
  {id: 1, label: "Fri yoga", minutes: 41, calories: 881, kind: "strength"},
  {id: 2, label: "Thu ride", minutes: 28, calories: 670, kind: "mobility"},
  {id: 3, label: "Mon lift", minutes: 50, calories: 841, kind: "strength"},
  {id: 4, label: "Tue swim", minutes: 43, calories: 770, kind: "strength"},
  {id: 5, label: "Fri run", minutes: 96, calories: 718, kind: "mobility"},
  {id: 6, label: "Wed swim", minutes: 33, calories: 312, kind: "mobility"},
  {id: 7, label: "Wed lift", minutes: 39, calories: 92, kind: "strength"},
  {id: 8, label: "Sun walk", minutes: 38, calories: 357, kind: "mobility"}
];

test("an empty list", () => {
  expect(totalMinutes([])).toEqual(0);
});

test("all workouts", () => {
  expect(totalMinutes(WORKOUTS)).toEqual(368);
});
