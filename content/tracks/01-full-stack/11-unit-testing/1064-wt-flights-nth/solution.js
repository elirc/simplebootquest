test("with 1", () => {
  expect(nthByDelayMin(FLIGHTS, 1)).toEqual("EK3");
});

test("with 2", () => {
  expect(nthByDelayMin(FLIGHTS, 2)).toEqual("BA117");
});

test("with 5", () => {
  expect(nthByDelayMin(FLIGHTS, 5)).toEqual("AF22");
});

test("with 0", () => {
  expect(nthByDelayMin(FLIGHTS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByDelayMin(FLIGHTS, 99)).toEqual(null);
});
