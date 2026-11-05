test('full changelog', () => {
  const md = changelog('1.5.0', '2026-03-01', [
    'feat(todos): add due dates',
    'fix: handle empty titles',
    'chore: bump deps',
    'feat(api)!: remove v1 endpoints',
    'feat: dark mode',
    'perf(db): add index on user_id',
  ]);
  expect(md).toBe(
    '## 1.5.0 (2026-03-01)\n\n' +
    '### ⚠ Breaking changes\n- **api:** remove v1 endpoints\n\n' +
    '### Features\n- **todos:** add due dates\n- dark mode\n\n' +
    '### Fixes\n- handle empty titles\n- **db:** add index on user_id\n',
  );
});
test('omits empty sections', () => expect(changelog('1.4.3', '2026-02-01', ['fix: typo in error'])).toBe('## 1.4.3 (2026-02-01)\n\n### Fixes\n- typo in error\n'));
test('no user-facing changes', () => expect(changelog('1.4.3', '2026-02-01', ['chore: ci', 'Merge branch main'])).toBe('## 1.4.3 (2026-02-01)\n\n- No user-facing changes\n'));
