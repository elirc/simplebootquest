const WORKOUTS = [
  {id: 1, label: "Sun walk", minutes: 68, calories: 624, kind: "mobility"},
  {id: 2, label: "Sat ride", minutes: 24, calories: 199, kind: "cardio"},
  {id: 3, label: "Mon lift", minutes: 54, calories: 280, kind: "cardio"},
  {id: 4, label: "Mon run", minutes: 44, calories: 555, kind: "strength"},
  {id: 5, label: "Fri run", minutes: 48, calories: 93, kind: "mobility"},
  {id: 6, label: "Wed lift", minutes: 117, calories: 767, kind: "cardio"},
  {id: 7, label: "Fri yoga", minutes: 98, calories: 652, kind: "mobility"},
  {id: 8, label: "Tue swim", minutes: 76, calories: 87, kind: "mobility"}
];

test("with \"cardio\"", () => {
  expect(workoutsInKindRanked(WORKOUTS, "cardio")).toEqual(["Wed lift","Mon lift","Sat ride"]);
});

test("with \"strength\"", () => {
  expect(workoutsInKindRanked(WORKOUTS, "strength")).toEqual(["Mon run"]);
});

test("with \"mobility\"", () => {
  expect(workoutsInKindRanked(WORKOUTS, "mobility")).toEqual(["Fri yoga","Tue swim","Sun walk","Fri run"]);
});
