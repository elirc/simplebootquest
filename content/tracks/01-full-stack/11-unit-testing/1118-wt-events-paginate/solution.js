test("with 1, 3", () => {
  expect(pageOfEvents(EVENTS, 1, 3)).toEqual({"items":["Book Club","JS Meetup","Open Mic"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfEvents(EVENTS, 2, 3)).toEqual({"items":["AI Panel","Startup Night","Hackathon"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfEvents(EVENTS, 3, 3)).toEqual({"items":["Code Dojo","Workshop"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfEvents(EVENTS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
