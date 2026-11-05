test("case 1: password", () => {
  expect(checkTicketPassword("password", "Ada")).toEqual(["needs an uppercase letter","needs a symbol"]);
});

test("case 2: aaaaaaaaaaaa", () => {
  expect(checkTicketPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs an uppercase letter","needs a symbol"]);
});

test("case 3: Tr0ub4dor&3", () => {
  expect(checkTicketPassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 4: xxxxxxxxxxxx…", () => {
  expect(checkTicketPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 5: AdaLovelace1!", () => {
  expect(checkTicketPassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 6: P4ssw0rd!", () => {
  expect(checkTicketPassword("P4ssw0rd!", "Ada")).toEqual([]);
});
