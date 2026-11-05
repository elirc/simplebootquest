test("with \"in-person\"", () => {
  expect(eventsInFormatRanked(EVENTS, "in-person")).toEqual(["Workshop","Game Night","Career Fair"]);
});

test("with \"online\"", () => {
  expect(eventsInFormatRanked(EVENTS, "online")).toEqual(["Demo Day","Open Mic"]);
});

test("with \"hybrid\"", () => {
  expect(eventsInFormatRanked(EVENTS, "hybrid")).toEqual(["AI Panel","JS Meetup","Code Dojo"]);
});
