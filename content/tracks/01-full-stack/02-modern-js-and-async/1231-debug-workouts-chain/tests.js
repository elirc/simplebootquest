const WORKOUTS = [
  {id: 1, label: "Mon lift", minutes: 42, calories: 237, kind: "cardio"},
  {id: 2, label: "Fri yoga", minutes: 66, calories: 436, kind: "cardio"},
  {id: 3, label: "Thu ride", minutes: 53, calories: 893, kind: "cardio"},
  {id: 4, label: "Wed lift", minutes: 36, calories: 306, kind: "cardio"},
  {id: 5, label: "Sun walk", minutes: 39, calories: 352, kind: "mobility"},
  {id: 6, label: "Tue run", minutes: 95, calories: 498, kind: "cardio"},
  {id: 7, label: "Mon run", minutes: 119, calories: 408, kind: "mobility"},
  {id: 8, label: "Wed swim", minutes: 112, calories: 630, kind: "strength"}
];

test("with \"cardio\"", () => {
  expect(workoutsInKindRanked(WORKOUTS, "cardio")).toEqual(["Thu ride","Tue run","Fri yoga","Wed lift","Mon lift"]);
});

test("with \"strength\"", () => {
  expect(workoutsInKindRanked(WORKOUTS, "strength")).toEqual(["Wed swim"]);
});

test("with \"mobility\"", () => {
  expect(workoutsInKindRanked(WORKOUTS, "mobility")).toEqual(["Mon run","Sun walk"]);
});
