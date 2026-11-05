test("with \"cardio\"", () => {
  expect(workoutsInKindRanked(WORKOUTS, "cardio")).toEqual(["Wed lift","Thu ride"]);
});

test("with \"strength\"", () => {
  expect(workoutsInKindRanked(WORKOUTS, "strength")).toEqual(["Wed swim","Mon lift"]);
});

test("with \"mobility\"", () => {
  expect(workoutsInKindRanked(WORKOUTS, "mobility")).toEqual(["Fri run","Tue swim","Thu yoga","Sat ride"]);
});
