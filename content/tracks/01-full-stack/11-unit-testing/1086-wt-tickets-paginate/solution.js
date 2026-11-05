test("with 1, 3", () => {
  expect(pageOfTickets(TICKETS, 1, 3)).toEqual({"items":["Refund request","Feature idea","Slow page"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfTickets(TICKETS, 2, 3)).toEqual({"items":["Bug in export","Wrong invoice","Dark mode"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfTickets(TICKETS, 3, 3)).toEqual({"items":["Missing order","Email change"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfTickets(TICKETS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
