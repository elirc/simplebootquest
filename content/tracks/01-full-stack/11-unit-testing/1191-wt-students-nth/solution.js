test("with 1", () => {
  expect(nthByAge(STUDENTS, 1)).toEqual("Gita");
});

test("with 2", () => {
  expect(nthByAge(STUDENTS, 2)).toEqual("Ines");
});

test("with 5", () => {
  expect(nthByAge(STUDENTS, 5)).toEqual("Femi");
});

test("with 0", () => {
  expect(nthByAge(STUDENTS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByAge(STUDENTS, 99)).toEqual(null);
});
