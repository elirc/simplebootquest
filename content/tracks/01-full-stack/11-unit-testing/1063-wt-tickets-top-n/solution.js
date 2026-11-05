test('does not mutate the input', () => {
  const before = JSON.stringify(TICKETS);
  topTicketsByAgeHours(TICKETS, 1);
  expect(JSON.stringify(TICKETS)).toBe(before);
});

test("with 1", () => {
  expect(topTicketsByAgeHours(TICKETS, 1)).toEqual(["Email change"]);
});

test("with 3", () => {
  expect(topTicketsByAgeHours(TICKETS, 3)).toEqual(["Email change","Wrong invoice","Slow page"]);
});

test("with 0", () => {
  expect(topTicketsByAgeHours(TICKETS, 0)).toEqual([]);
});
