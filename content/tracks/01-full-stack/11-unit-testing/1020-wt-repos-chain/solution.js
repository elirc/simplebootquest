test("with \"TypeScript\"", () => {
  expect(reposInLanguageRanked(REPOS, "TypeScript")).toEqual(["mobile","billing"]);
});

test("with \"Go\"", () => {
  expect(reposInLanguageRanked(REPOS, "Go")).toEqual(["notifier"]);
});

test("with \"Python\"", () => {
  expect(reposInLanguageRanked(REPOS, "Python")).toEqual(["cli","docs","api-gateway","auth-service","analytics"]);
});
