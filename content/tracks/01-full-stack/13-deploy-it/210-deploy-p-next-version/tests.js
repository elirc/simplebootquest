test('parseCommit', () => {
  expect(parseCommit('feat(api): add pagination')).toEqual({ type: 'feat', scope: 'api', breaking: false, subject: 'add pagination' });
  expect(parseCommit('fix: handle empty titles')).toEqual({ type: 'fix', scope: null, breaking: false, subject: 'handle empty titles' });
  expect(parseCommit('feat!: drop v1').breaking).toBe(true);
  expect(parseCommit('refactor(db): rename table\n\nBREAKING CHANGE: column renamed').breaking).toBe(true);
  expect(parseCommit('Update README')).toBeNull();
  expect(parseCommit('feat:missing space')).toBeNull();
});
test('releaseType picks the highest', () => {
  expect(releaseType(['chore: deps', 'docs: typo'])).toBeNull();
  expect(releaseType(['fix: a', 'perf: b'])).toBe('patch');
  expect(releaseType(['fix: a', 'feat: b', 'chore: c'])).toBe('minor');
  expect(releaseType(['feat: b', 'fix!: c'])).toBe('major');
  expect(releaseType(['WIP', 'fix: real'])).toBe('patch');
});
test('nextVersion', () => {
  expect(nextVersion('1.4.2', ['fix: a'])).toBe('1.4.3');
  expect(nextVersion('1.4.2', ['feat: a', 'fix: b'])).toBe('1.5.0');
  expect(nextVersion('1.4.2', ['feat!: a'])).toBe('2.0.0');
  expect(nextVersion('1.4.2', ['chore: a'])).toBe('1.4.2');
});
test('0.x versions are conservative', () => {
  expect(nextVersion('0.3.1', ['feat!: break'])).toBe('0.4.0');
  expect(nextVersion('0.3.1', ['feat: add'])).toBe('0.3.2');
  expect(nextVersion('0.3.1', ['fix: x'])).toBe('0.3.2');
});
