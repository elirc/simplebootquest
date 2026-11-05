test('does not mutate the input', () => {
  const before = JSON.stringify(TICKETS);
  ticketsByReplies(TICKETS);
  expect(JSON.stringify(TICKETS)).toBe(before);
});

test("all tickets", () => {
  expect(ticketsByReplies(TICKETS)).toEqual(["Password reset","Email change","Dark mode","Login fails","Slow page","Wrong invoice","Billing error","App crash"]);
});
