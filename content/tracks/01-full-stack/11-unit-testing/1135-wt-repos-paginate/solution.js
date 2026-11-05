test("with 1, 3", () => {
  expect(pageOfRepos(REPOS, 1, 3)).toEqual({"items":["cli","notifier","mobile"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfRepos(REPOS, 2, 3)).toEqual({"items":["docs","search","infra"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfRepos(REPOS, 3, 3)).toEqual({"items":["web-app","analytics"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfRepos(REPOS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
