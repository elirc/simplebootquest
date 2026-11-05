test("an empty list", () => {
  expect(averageCalories([])).toEqual(null);
});

test("all workouts", () => {
  expect(averageCalories(WORKOUTS)).toEqual(563.6);
});
