test("case 1: UPPER123!", () => {
  expect(checkTicketPassword("UPPER123!", "Ada")).toEqual(["too short"]);
});

test("case 2: password", () => {
  expect(checkTicketPassword("password", "Ada")).toEqual(["too short"]);
});

test("case 3: xxxxxxxxxxxx…", () => {
  expect(checkTicketPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 4: P4ssw0rd!", () => {
  expect(checkTicketPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 5: AdaLovelace1!", () => {
  expect(checkTicketPassword("AdaLovelace1!", "Ada")).toEqual(["too short","contains your name"]);
});

test("case 6: lower123!", () => {
  expect(checkTicketPassword("lower123!", "Ada")).toEqual(["too short"]);
});
