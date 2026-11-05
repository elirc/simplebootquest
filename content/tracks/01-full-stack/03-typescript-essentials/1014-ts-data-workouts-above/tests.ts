const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 30, calories: 401, kind: "strength"},
  {id: 2, label: "Sun walk", minutes: 26, calories: 696, kind: "cardio"},
  {id: 3, label: "Fri yoga", minutes: 107, calories: 761, kind: "strength"},
  {id: 4, label: "Sat ride", minutes: 109, calories: 347, kind: "mobility"},
  {id: 5, label: "Mon lift", minutes: 72, calories: 243, kind: "strength"},
  {id: 6, label: "Tue run", minutes: 35, calories: 177, kind: "strength"},
  {id: 7, label: "Wed lift", minutes: 29, calories: 668, kind: "cardio"},
  {id: 8, label: "Thu ride", minutes: 25, calories: 809, kind: "strength"}
];

test("with 29", () => {
  expect(workoutsAbove(WORKOUTS, 29)).toEqual(["Tue swim","Fri yoga","Sat ride","Mon lift","Tue run"]);
});

test("with 35", () => {
  expect(workoutsAbove(WORKOUTS, 35)).toEqual(["Fri yoga","Sat ride","Mon lift"]);
});

test("with 999999", () => {
  expect(workoutsAbove(WORKOUTS, 999999)).toEqual([]);
});
