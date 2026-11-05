const WORKOUTS = [
  {id: 1, label: "Mon run", minutes: 94, calories: 544, kind: "mobility"},
  {id: 2, label: "Thu yoga", minutes: 26, calories: 264, kind: "cardio"},
  {id: 3, label: "Thu ride", minutes: 81, calories: 882, kind: "strength"},
  {id: 4, label: "Mon lift", minutes: 50, calories: 241, kind: "strength"},
  {id: 5, label: "Sat ride", minutes: 93, calories: 340, kind: "strength"},
  {id: 6, label: "Tue swim", minutes: 113, calories: 322, kind: "strength"},
  {id: 7, label: "Sun walk", minutes: 39, calories: 100, kind: "strength"},
  {id: 8, label: "Fri run", minutes: 49, calories: 316, kind: "cardio"}
];

test("with 264", () => {
  expect(allWorkoutsUnder(WORKOUTS, 264)).toEqual(false);
});

test("with 883", () => {
  expect(allWorkoutsUnder(WORKOUTS, 883)).toEqual(true);
});

test("with 882", () => {
  expect(allWorkoutsUnder(WORKOUTS, 882)).toEqual(false);
});
