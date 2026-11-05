test("case 1: AdaLovelace1!", () => {
  expect(checkTicketPassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 2: password", () => {
  expect(checkTicketPassword("password", "Ada")).toEqual(["too short","needs an uppercase letter","needs a symbol"]);
});

test("case 3: lower123!", () => {
  expect(checkTicketPassword("lower123!", "Ada")).toEqual(["needs an uppercase letter"]);
});

test("case 4: P4ssw0rd!", () => {
  expect(checkTicketPassword("P4ssw0rd!", "Ada")).toEqual([]);
});

test("case 5: Correct-Horse-9", () => {
  expect(checkTicketPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 6: Tr0ub4dor&3", () => {
  expect(checkTicketPassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});
