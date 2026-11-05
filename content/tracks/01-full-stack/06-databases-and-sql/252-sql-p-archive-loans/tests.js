test("returned loans are archived", () => {
  expect(query("SELECT id, book_id, member_id, returned_on FROM archived_loans ORDER BY id")).toEqual([{"id": 1, "book_id": 1, "member_id": 1, "returned_on": "2026-01-20"}, {"id": 3, "book_id": 6, "member_id": 2, "returned_on": "2026-01-30"}]);
});
test("only open loans remain", () => {
  expect(query("SELECT id FROM loans ORDER BY id")).toEqual([{"id": 2}, {"id": 4}, {"id": 5}, {"id": 6}]);
});
