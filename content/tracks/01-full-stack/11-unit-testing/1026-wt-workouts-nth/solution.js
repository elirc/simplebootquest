test("with 1", () => {
  expect(nthByMinutes(WORKOUTS, 1)).toEqual("Mon lift");
});

test("with 2", () => {
  expect(nthByMinutes(WORKOUTS, 2)).toEqual("Mon run");
});

test("with 5", () => {
  expect(nthByMinutes(WORKOUTS, 5)).toEqual("Thu yoga");
});

test("with 0", () => {
  expect(nthByMinutes(WORKOUTS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByMinutes(WORKOUTS, 99)).toEqual(null);
});
