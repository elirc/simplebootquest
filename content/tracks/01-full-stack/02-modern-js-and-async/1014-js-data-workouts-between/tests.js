const WORKOUTS = [
  {id: 1, label: "Wed lift", minutes: 33, calories: 442, kind: "strength"},
  {id: 2, label: "Sun walk", minutes: 20, calories: 214, kind: "mobility"},
  {id: 3, label: "Tue run", minutes: 50, calories: 526, kind: "mobility"},
  {id: 4, label: "Fri yoga", minutes: 56, calories: 613, kind: "mobility"},
  {id: 5, label: "Mon lift", minutes: 89, calories: 714, kind: "cardio"},
  {id: 6, label: "Thu yoga", minutes: 62, calories: 262, kind: "strength"},
  {id: 7, label: "Sat ride", minutes: 52, calories: 642, kind: "cardio"},
  {id: 8, label: "Wed swim", minutes: 80, calories: 176, kind: "mobility"}
];

test("with 50, 56", () => {
  expect(workoutsInRange(WORKOUTS, 50, 56)).toEqual(["Tue run","Fri yoga","Sat ride"]);
});

test("with 56, 62", () => {
  expect(workoutsInRange(WORKOUTS, 56, 62)).toEqual(["Fri yoga","Thu yoga"]);
});

test("with 50, 50", () => {
  expect(workoutsInRange(WORKOUTS, 50, 50)).toEqual(["Tue run"]);
});
