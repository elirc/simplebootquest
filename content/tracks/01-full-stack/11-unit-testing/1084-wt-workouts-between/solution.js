test("with 52, 70", () => {
  expect(workoutsInRange(WORKOUTS, 52, 70)).toEqual(["Mon run","Sun walk","Thu yoga"]);
});

test("with 70, 85", () => {
  expect(workoutsInRange(WORKOUTS, 70, 85)).toEqual(["Mon run","Fri yoga"]);
});

test("with 52, 52", () => {
  expect(workoutsInRange(WORKOUTS, 52, 52)).toEqual(["Thu yoga"]);
});
