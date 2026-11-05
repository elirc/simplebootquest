test("with \"og\"", () => {
  expect(searchTickets(TICKETS, "og")).toEqual(["Login fails"]);
});

test("with \"OG\"", () => {
  expect(searchTickets(TICKETS, "OG")).toEqual(["Login fails"]);
});

test("with \"  \"", () => {
  expect(searchTickets(TICKETS, "  ")).toEqual(["App crash","Feature idea","Dark mode","Login fails","Password reset","Wrong invoice","Slow page","Missing order"]);
});

test("with \"zzz\"", () => {
  expect(searchTickets(TICKETS, "zzz")).toEqual([]);
});
