test('does not mutate the input', () => {
  const before = JSON.stringify(REPOS);
  reposByStars(REPOS);
  expect(JSON.stringify(REPOS)).toBe(before);
});

test("all repos", () => {
  expect(reposByStars(REPOS)).toEqual(["docs","design-system","auth-service","mobile","infra","notifier","search","web-app"]);
});
