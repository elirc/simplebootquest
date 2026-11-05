test("with 29, 133", () => {
  expect(ticketsInRange(TICKETS, 29, 133)).toEqual(["Slow page","Login fails","Billing error"]);
});

test("with 133, 152", () => {
  expect(ticketsInRange(TICKETS, 133, 152)).toEqual(["Login fails","Missing order"]);
});

test("with 29, 29", () => {
  expect(ticketsInRange(TICKETS, 29, 29)).toEqual(["Slow page"]);
});
