test("with \"eb\"", () => {
  expect(searchRepos(REPOS, "eb")).toEqual(["web-app"]);
});

test("with \"EB\"", () => {
  expect(searchRepos(REPOS, "EB")).toEqual(["web-app"]);
});

test("with \"  \"", () => {
  expect(searchRepos(REPOS, "  ")).toEqual(["notifier","billing","api-gateway","docs","mobile","design-system","web-app","auth-service"]);
});

test("with \"zzz\"", () => {
  expect(searchRepos(REPOS, "zzz")).toEqual([]);
});
