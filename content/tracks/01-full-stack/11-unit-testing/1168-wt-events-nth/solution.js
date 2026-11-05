test("with 1", () => {
  expect(nthByRegistered(EVENTS, 1)).toEqual("Workshop");
});

test("with 2", () => {
  expect(nthByRegistered(EVENTS, 2)).toEqual("Demo Day");
});

test("with 5", () => {
  expect(nthByRegistered(EVENTS, 5)).toEqual("Career Fair");
});

test("with 0", () => {
  expect(nthByRegistered(EVENTS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByRegistered(EVENTS, 99)).toEqual(null);
});
