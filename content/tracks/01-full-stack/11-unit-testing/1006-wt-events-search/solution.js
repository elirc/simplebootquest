test("with \"ar\"", () => {
  expect(searchEvents(EVENTS, "ar")).toEqual(["Career Fair"]);
});

test("with \"AR\"", () => {
  expect(searchEvents(EVENTS, "AR")).toEqual(["Career Fair"]);
});

test("with \"  \"", () => {
  expect(searchEvents(EVENTS, "  ")).toEqual(["Career Fair","Game Night","Code Dojo","Hackathon","JS Meetup","Design Jam","Book Club","AI Panel"]);
});

test("with \"zzz\"", () => {
  expect(searchEvents(EVENTS, "zzz")).toEqual([]);
});
