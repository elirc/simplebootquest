test("case 1: P4ssw0rd!", () => {
  expect(checkTicketPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 2: AdaLovelace1!", () => {
  expect(checkTicketPassword("AdaLovelace1!", "Ada")).toEqual(["contains your name"]);
});

test("case 3: password", () => {
  expect(checkTicketPassword("password", "Ada")).toEqual(["too short","needs a digit"]);
});

test("case 4: Mixed Case 42", () => {
  expect(checkTicketPassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 5: aaaaaaaaaaaa", () => {
  expect(checkTicketPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit"]);
});

test("case 6:  Spaces1! ", () => {
  expect(checkTicketPassword(" Spaces1! ", "Ada")).toEqual([]);
});
