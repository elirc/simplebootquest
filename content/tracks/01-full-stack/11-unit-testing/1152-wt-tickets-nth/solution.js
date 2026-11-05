test("with 1", () => {
  expect(nthByReplies(TICKETS, 1)).toEqual("Missing order");
});

test("with 2", () => {
  expect(nthByReplies(TICKETS, 2)).toEqual("Login fails");
});

test("with 5", () => {
  expect(nthByReplies(TICKETS, 5)).toEqual("Wrong invoice");
});

test("with 0", () => {
  expect(nthByReplies(TICKETS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByReplies(TICKETS, 99)).toEqual(null);
});
