test("with \"email\"", () => {
  expect(ticketsInChannelRanked(TICKETS, "email")).toEqual(["Email change","App crash","Feature idea"]);
});

test("with \"chat\"", () => {
  expect(ticketsInChannelRanked(TICKETS, "chat")).toEqual(["Missing order","Billing error"]);
});

test("with \"phone\"", () => {
  expect(ticketsInChannelRanked(TICKETS, "phone")).toEqual(["Login fails","Wrong invoice","Dark mode"]);
});
