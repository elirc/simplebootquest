const WORKOUTS = [
  {id: 1, label: "Mon lift", minutes: 93, calories: 848, kind: "strength"},
  {id: 2, label: "Mon run", minutes: 31, calories: 105, kind: "mobility"},
  {id: 3, label: "Fri yoga", minutes: 41, calories: 532, kind: "cardio"},
  {id: 4, label: "Wed lift", minutes: 40, calories: 222, kind: "cardio"},
  {id: 5, label: "Sat ride", minutes: 85, calories: 115, kind: "mobility"},
  {id: 6, label: "Tue run", minutes: 68, calories: 778, kind: "strength"},
  {id: 7, label: "Sun walk", minutes: 65, calories: 587, kind: "strength"},
  {id: 8, label: "Wed swim", minutes: 85, calories: 288, kind: "cardio"}
];

test("with 1, 3", () => {
  expect(pageOfWorkouts(WORKOUTS, 1, 3)).toEqual({"items":["Mon lift","Mon run","Fri yoga"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfWorkouts(WORKOUTS, 2, 3)).toEqual({"items":["Wed lift","Sat ride","Tue run"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfWorkouts(WORKOUTS, 3, 3)).toEqual({"items":["Sun walk","Wed swim"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfWorkouts(WORKOUTS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
