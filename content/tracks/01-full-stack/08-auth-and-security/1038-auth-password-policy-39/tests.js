test("case 1: Correct-Horse-9", () => {
  expect(checkTicketPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 2: AdaLovelace1!", () => {
  expect(checkTicketPassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 3: aaaaaaaaaaaa", () => {
  expect(checkTicketPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit","needs an uppercase letter"]);
});

test("case 4:  Spaces1! ", () => {
  expect(checkTicketPassword(" Spaces1! ", "Ada")).toEqual([]);
});

test("case 5: Tr0ub4dor&3", () => {
  expect(checkTicketPassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 6: P4ssw0rd!", () => {
  expect(checkTicketPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});
