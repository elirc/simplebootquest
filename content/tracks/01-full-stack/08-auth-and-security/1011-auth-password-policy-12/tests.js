test("case 1: AdaLovelace1!", () => {
  expect(checkStudentPassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 2: Tr0ub4dor&3", () => {
  expect(checkStudentPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 3: xxxxxxxxxxxx…", () => {
  expect(checkStudentPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 4: Mixed Case 42", () => {
  expect(checkStudentPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});

test("case 5: P4ssw0rd!", () => {
  expect(checkStudentPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 6: password", () => {
  expect(checkStudentPassword("password", "Ada")).toEqual(["too short","needs a digit","needs a symbol"]);
});
