const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 91, calories: 752, kind: "strength"},
  {id: 2, label: "Fri yoga", minutes: 29, calories: 185, kind: "strength"},
  {id: 3, label: "Sat ride", minutes: 77, calories: 469, kind: "cardio"},
  {id: 4, label: "Thu yoga", minutes: 44, calories: 795, kind: "mobility"},
  {id: 5, label: "Sun walk", minutes: 79, calories: 280, kind: "mobility"},
  {id: 6, label: "Mon lift", minutes: 19, calories: 618, kind: "mobility"},
  {id: 7, label: "Thu ride", minutes: 32, calories: 822, kind: "strength"},
  {id: 8, label: "Wed swim", minutes: 78, calories: 785, kind: "mobility"}
];

test("with 32, 77", () => {
  expect(workoutsInRange(WORKOUTS, 32, 77)).toEqual(["Sat ride","Thu yoga","Thu ride"]);
});

test("with 77, 78", () => {
  expect(workoutsInRange(WORKOUTS, 77, 78)).toEqual(["Sat ride","Wed swim"]);
});

test("with 32, 32", () => {
  expect(workoutsInRange(WORKOUTS, 32, 32)).toEqual(["Thu ride"]);
});
