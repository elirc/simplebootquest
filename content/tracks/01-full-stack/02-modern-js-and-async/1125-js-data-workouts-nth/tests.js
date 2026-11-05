const WORKOUTS = [
  {id: 1, label: "Sat ride", minutes: 47, calories: 637, kind: "strength"},
  {id: 2, label: "Fri run", minutes: 40, calories: 774, kind: "cardio"},
  {id: 3, label: "Sun walk", minutes: 58, calories: 389, kind: "strength"},
  {id: 4, label: "Thu ride", minutes: 57, calories: 121, kind: "mobility"},
  {id: 5, label: "Thu yoga", minutes: 61, calories: 642, kind: "cardio"},
  {id: 6, label: "Fri yoga", minutes: 102, calories: 299, kind: "mobility"},
  {id: 7, label: "Mon lift", minutes: 77, calories: 830, kind: "strength"},
  {id: 8, label: "Mon run", minutes: 53, calories: 449, kind: "cardio"}
];

test("with 1", () => {
  expect(nthByCalories(WORKOUTS, 1)).toEqual("Mon lift");
});

test("with 2", () => {
  expect(nthByCalories(WORKOUTS, 2)).toEqual("Fri run");
});

test("with 5", () => {
  expect(nthByCalories(WORKOUTS, 5)).toEqual("Mon run");
});

test("with 0", () => {
  expect(nthByCalories(WORKOUTS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByCalories(WORKOUTS, 99)).toEqual(null);
});
