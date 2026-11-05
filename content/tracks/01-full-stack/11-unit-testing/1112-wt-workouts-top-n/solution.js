test('does not mutate the input', () => {
  const before = JSON.stringify(WORKOUTS);
  topWorkoutsByCalories(WORKOUTS, 1);
  expect(JSON.stringify(WORKOUTS)).toBe(before);
});

test("with 1", () => {
  expect(topWorkoutsByCalories(WORKOUTS, 1)).toEqual(["Fri run"]);
});

test("with 3", () => {
  expect(topWorkoutsByCalories(WORKOUTS, 3)).toEqual(["Fri run","Thu yoga","Tue run"]);
});

test("with 0", () => {
  expect(topWorkoutsByCalories(WORKOUTS, 0)).toEqual([]);
});
