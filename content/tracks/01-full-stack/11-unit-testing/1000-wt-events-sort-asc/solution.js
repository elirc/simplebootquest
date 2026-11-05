test('does not mutate the input', () => {
  const before = JSON.stringify(EVENTS);
  eventsByRegistered(EVENTS);
  expect(JSON.stringify(EVENTS)).toBe(before);
});

test("all events", () => {
  expect(eventsByRegistered(EVENTS)).toEqual(["Code Dojo","Open Mic","Game Night","AI Panel","Career Fair","Book Club","Workshop","Hackathon"]);
});
