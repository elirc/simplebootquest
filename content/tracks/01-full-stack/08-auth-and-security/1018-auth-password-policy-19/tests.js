test("case 1:  Spaces1! ", () => {
  expect(checkTicketPassword(" Spaces1! ", "Ada")).toEqual(["has surrounding spaces"]);
});

test("case 2: Correct-Horse-9", () => {
  expect(checkTicketPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 3: ada", () => {
  expect(checkTicketPassword("ada", "Ada")).toEqual(["too short","needs a digit"]);
});

test("case 4: password", () => {
  expect(checkTicketPassword("password", "Ada")).toEqual(["needs a digit"]);
});

test("case 5: xxxxxxxxxxxx…", () => {
  expect(checkTicketPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual(["too long"]);
});

test("case 6: Mixed Case 42", () => {
  expect(checkTicketPassword("Mixed Case 42", "Ada")).toEqual([]);
});
