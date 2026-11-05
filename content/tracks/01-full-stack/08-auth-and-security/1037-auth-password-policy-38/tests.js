test("case 1: P4ssw0rd!", () => {
  expect(checkStudentPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 2: Correct-Horse-9", () => {
  expect(checkStudentPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 3: xxxxxxxxxxxx…", () => {
  expect(checkStudentPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual(["too long"]);
});

test("case 4: Mixed Case 42", () => {
  expect(checkStudentPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});

test("case 5: UPPER123!", () => {
  expect(checkStudentPassword("UPPER123!", "Ada")).toEqual(["too short","needs a lowercase letter"]);
});

test("case 6: aaaaaaaaaaaa", () => {
  expect(checkStudentPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a symbol"]);
});
