test("with \"eu\"", () => {
  expect(searchBooks(BOOKS, "eu")).toEqual(["Neuromancer"]);
});

test("with \"EU\"", () => {
  expect(searchBooks(BOOKS, "EU")).toEqual(["Neuromancer"]);
});

test("with \"  \"", () => {
  expect(searchBooks(BOOKS, "  ")).toEqual(["Kindred","Persuasion","Neuromancer","Dune","Emma","Hamlet","Ulysses","Rebecca"]);
});

test("with \"zzz\"", () => {
  expect(searchBooks(BOOKS, "zzz")).toEqual([]);
});
