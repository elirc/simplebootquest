const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 20, calories: 696, kind: "mobility"},
  {id: 2, label: "Sat ride", minutes: 113, calories: 457, kind: "cardio"},
  {id: 3, label: "Thu ride", minutes: 95, calories: 274, kind: "mobility"},
  {id: 4, label: "Wed lift", minutes: 95, calories: 390, kind: "mobility"},
  {id: 5, label: "Thu yoga", minutes: 111, calories: 260, kind: "strength"},
  {id: 6, label: "Fri yoga", minutes: 17, calories: 760, kind: "strength"},
  {id: 7, label: "Mon lift", minutes: 35, calories: 691, kind: "mobility"},
  {id: 8, label: "Tue run", minutes: 83, calories: 544, kind: "cardio"}
];

test("with \"at\"", () => {
  expect(searchWorkouts(WORKOUTS, "at")).toEqual(["Sat ride"]);
});

test("with \"AT\"", () => {
  expect(searchWorkouts(WORKOUTS, "AT")).toEqual(["Sat ride"]);
});

test("with \"  \"", () => {
  expect(searchWorkouts(WORKOUTS, "  ")).toEqual(["Tue swim","Sat ride","Thu ride","Wed lift","Thu yoga","Fri yoga","Mon lift","Tue run"]);
});

test("with \"zzz\"", () => {
  expect(searchWorkouts(WORKOUTS, "zzz")).toEqual([]);
});
