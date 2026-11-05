test("with \"ed\"", () => {
  expect(searchWorkouts(WORKOUTS, "ed")).toEqual(["Wed lift"]);
});

test("with \"ED\"", () => {
  expect(searchWorkouts(WORKOUTS, "ED")).toEqual(["Wed lift"]);
});

test("with \"  \"", () => {
  expect(searchWorkouts(WORKOUTS, "  ")).toEqual(["Thu ride","Mon run","Fri run","Thu yoga","Tue run","Mon lift","Sun walk","Wed lift"]);
});

test("with \"zzz\"", () => {
  expect(searchWorkouts(WORKOUTS, "zzz")).toEqual([]);
});
