const WORKOUTS = [
  {id: 1, label: "Sun walk", minutes: 26, calories: 488, kind: "strength"},
  {id: 2, label: "Tue swim", minutes: 106, calories: 608, kind: "cardio"},
  {id: 3, label: "Mon lift", minutes: 33, calories: 497, kind: "mobility"},
  {id: 4, label: "Thu yoga", minutes: 57, calories: 871, kind: "cardio"},
  {id: 5, label: "Mon run", minutes: 100, calories: 643, kind: "mobility"},
  {id: 6, label: "Fri run", minutes: 89, calories: 396, kind: "cardio"},
  {id: 7, label: "Wed swim", minutes: 54, calories: 94, kind: "mobility"},
  {id: 8, label: "Tue run", minutes: 25, calories: 376, kind: "cardio"}
];

test("with 396", () => {
  expect(allWorkoutsUnder(WORKOUTS, 396)).toEqual(false);
});

test("with 872", () => {
  expect(allWorkoutsUnder(WORKOUTS, 872)).toEqual(true);
});

test("with 871", () => {
  expect(allWorkoutsUnder(WORKOUTS, 871)).toEqual(false);
});
