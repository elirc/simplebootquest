test("with 143, 252", () => {
  expect(eventsInRange(EVENTS, 143, 252)).toEqual(["AI Panel","Demo Day","Book Club"]);
});

test("with 252, 292", () => {
  expect(eventsInRange(EVENTS, 252, 292)).toEqual(["AI Panel","JS Meetup"]);
});

test("with 143, 143", () => {
  expect(eventsInRange(EVENTS, 143, 143)).toEqual(["Book Club"]);
});
