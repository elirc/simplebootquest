test("with 1, 3", () => {
  expect(pageOfBooks(BOOKS, 1, 3)).toEqual({"items":["Walden","Clean Code","Siddhartha"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfBooks(BOOKS, 2, 3)).toEqual({"items":["Matilda","Rebecca","Ulysses"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfBooks(BOOKS, 3, 3)).toEqual({"items":["Hamlet","Kindred"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfBooks(BOOKS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
