test('does not mutate the input', () => {
  const before = JSON.stringify(WORKOUTS);
  workoutsByMinutes(WORKOUTS);
  expect(JSON.stringify(WORKOUTS)).toBe(before);
});

test("all workouts", () => {
  expect(workoutsByMinutes(WORKOUTS)).toEqual(["Tue run","Sat ride","Wed lift","Wed swim","Sun walk","Mon lift","Tue swim","Fri yoga"]);
});
